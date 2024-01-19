const express = require('express');
const {allProducts} = require('../Controller/productController');

const router = express.Router();

router.get('/productlist', allProducts);



module.exports = router;