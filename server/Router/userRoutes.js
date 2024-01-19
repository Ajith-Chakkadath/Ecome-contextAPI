const express = require('express');
const { register, login,createProduct,getProductsBySeller ,updateProduct,deleteProduct} = require('../Controller/usercontroller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/:sellerId/addproduct',createProduct)
router.get('/:sellerId',getProductsBySeller)
router.put('/:sellerId/:productId',updateProduct)
router.delete('/:sellerId/:productId',deleteProduct)

module.exports = router;