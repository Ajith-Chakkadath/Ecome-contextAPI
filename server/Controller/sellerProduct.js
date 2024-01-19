// controllers/productController.js

const sellerProducts = require('../Models/sellerProductSchema')

// Get all products for a specific seller
const getProductsBySeller = async (req, res) => {
  try {
    const products = await sellerProducts.find({ sellerId: req.params.sellerId });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new product for a specific seller
const createProduct = async (req, res) => {
  try {
    const newProduct = await sellerProducts.create({ ...req.body, sellerId: req.params.sellerId });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a product for a specific seller
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await sellerProducts.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a product for a specific seller
const deleteProduct = async (req, res) => {
  try {
    await sellerProducts.findByIdAndDelete(req.params.productId);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
getProductsBySeller,
deleteProduct,
updateProduct,
createProduct
};