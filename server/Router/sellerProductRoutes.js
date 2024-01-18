

const express = require('express');
const router = express.Router();
const productController = require('../Controller/sellerProduct');

// Get all products for a specific seller
router.get('/:sellerId', productController.getProductsBySeller);

// Create a new product for a specific seller
router.post('/:sellerId', productController.createProduct);

// Update a product for a specific seller
router.put('/:sellerId/:productId', productController.updateProduct);

// Delete a product for a specific seller
router.delete('/:sellerId/:productId', productController.deleteProduct);

module.exports = router;
