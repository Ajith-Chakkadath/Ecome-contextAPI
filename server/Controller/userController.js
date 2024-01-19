const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../Models/userSchema');
const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const {updateProductInDatabase , deleteProductFromDatabase} =require('../Middelware/updateOperation')

const sellerProducts = require('../Models/sellerProductSchema')
const mongoose = require('mongoose');

sellerProducts


// const createSellerCollection = (sellerId) => {
//   const collectionName = `${sellerId}`;
//   return mongoose.model(collectionName, sellerProducts);
// };

const generateShortId = (originalObjectId) => {
  const base64Encoded = Buffer.from(originalObjectId.toHexString(), 'hex').toString('base64');
  
  // Remove padding characters ('=')
  const shortId = base64Encoded.replace(/=+$/, '');
  return shortId;
};

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });

    await user.save();

    // Generate a short ID
    const shortId = generateShortId(user._id);
  //   if(user.role =='seller'){
  //     createSellerCollection(shortId);
  //  }
    // Send the user details in the response with the short ID
    res.status(201).json({
      message: 'User registered successfully.',
      user: {
        _id: shortId,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const login = async (req, res) => {
  try {
    const user = await users.findOne({ email: req.body.email });
    if (!user) return res.status(401).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send('Invalid username or password.');

    // Generate a short ID
    const shortId = generateShortId(user._id);

    const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken, user: { ...user._doc, _id: shortId } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// const sellerProductList =async(req,res)=>{
//   try {
//     const sellerp = await sellerProducts.findById(req.params.sellerId)
//     res.json(sellerp);

//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// }

const createProduct = async (req, res) => {
  try {

    // console.log(req.params.sellerId)
    console.log(req)
    const newProduct = await sellerProducts.create({ ...req.body, sellerId:req.params.sellerId });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductsBySeller = async (req, res) => {
  try {
    const products = await sellerProducts.find({ sellerId: req.params.sellerId });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;
    const productId = req.params.productId;
    const updateData = req.body;
    const updatedProduct = await updateProductInDatabase(sellerId, productId, updateData
    );
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const deleteProduct = async (req, res) => {
  try {
    console.log('Received DELETE request:', req.params);
    const sellerId = req.params.sellerId;
    const productId = req.params.productId;

    const deletedProduct = await deleteProductFromDatabase(sellerId, productId);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  register,
  login,
  createProduct,
  getProductsBySeller,
  updateProduct,
  deleteProduct
};
