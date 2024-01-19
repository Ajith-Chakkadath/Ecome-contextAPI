
const products = require('../Models/productSchema')
const sellerProducts = require('../Models/sellerProductSchema')

const allProducts = async (req, res) => {
  try {
    const productslist = await products.find();
    const sellerp = await sellerProducts.find()
    const allProduct = [...productslist,...sellerp]

    res.json(allProduct);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

  module.exports = {
   allProducts
  };