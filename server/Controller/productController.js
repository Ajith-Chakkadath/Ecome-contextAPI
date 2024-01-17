
const products = require('../Models/productSchema')

const allProducts = async (req, res) => {
  try {
    const productslist = await products.find();
    res.json(productslist);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

  module.exports = {
   allProducts
  };