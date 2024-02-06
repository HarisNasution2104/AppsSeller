const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.createProduct);
// Implementasi endpoint untuk update dan delete

module.exports = router;
