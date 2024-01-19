

const express = require('express');
const router = express.Router();
const {getProductsBySeller,createProduct,updateProduct,deleteProduct} = require('../Controller/sellerProduct')

// Get all products for a specific seller
router.get(':sellerId', getProductsBySeller);

// Create a new product for a specific seller
router.post(':sellerId/addproduct', createProduct);


// Update a product for a specific seller
router.put(':sellerId/:productId',updateProduct);

// Delete a product for a specific seller
router.delete(':sellerId/:productId', deleteProduct);

module.exports = router;
