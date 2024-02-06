const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
// Tambahkan rute lainnya sesuai kebutuhan

module.exports = router;
