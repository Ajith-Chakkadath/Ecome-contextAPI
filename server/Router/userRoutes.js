const express = require('express');
const { register, login,createProduct,getProductsBySeller ,updateProduct,deleteProduct ,} = require('../Controller/usercontroller');
const {userCartAdd} = require('../Controller/userProduct')
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get('/:sellerId',sellerProductList)
router.post('/:sellerId/addproduct',createProduct)
router.get('/:sellerId',getProductsBySeller)
router.put('/:sellerId/:productId',updateProduct)
router.delete('/:sellerId/:productId',deleteProduct)


///////////////////

router.post('/:userId/cart/addproduct',userCartAdd)

module.exports = router;