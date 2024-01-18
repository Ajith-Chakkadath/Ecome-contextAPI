// controllers/productController.js

const sellerProduct = require('../Models/sellerProductSchema')

// Get all products for a specific seller
exports.getProductsBySeller = async (req, res) => {
  try {
    const products = await sellerProduct.find({ sellerId: req.params.sellerId });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new product for a specific seller
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await sellerProduct.create({ ...req.body, sellerId: req.params.sellerId });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a product for a specific seller
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await sellerProduct.findByIdAndUpdate(
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
exports.deleteProduct = async (req, res) => {
  try {
    await sellerProduct.findByIdAndDelete(req.params.productId);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
