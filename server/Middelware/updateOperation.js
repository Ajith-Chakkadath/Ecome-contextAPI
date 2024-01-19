
const sellerProducts = require('../Models/sellerProductSchema')

const updateProductInDatabase = async (sellerId, productId, updateData) => {
    try {
      // Find the product in the database by sellerId and productId
      console.log(sellerId)
      const existingProduct = await sellerProducts.findOne({ sellerId, productId });
  
      if (!existingProduct) {
        // Product not found
        throw new Error('Product not found');
      }
  
      // Update the existing product with the new data
      Object.assign(existingProduct, updateData);
  
      // Save the updated product to the database
      const updatedProduct = await existingProduct.save();
  
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  };


  const deleteProductFromDatabase = async (sellerId, productId) => {
    try {
      // Find and delete the product in the database by sellerId and productId
      console.log(sellerId)
      const deletedProduct = await sellerProducts.findOneAndDelete({ sellerId, productId });
  
      if (!deletedProduct) {
        // Product not found
        throw new Error('Product not found');
      }
  
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { updateProductInDatabase , deleteProductFromDatabase};