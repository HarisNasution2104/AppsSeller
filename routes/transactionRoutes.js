const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.createTransaction);
// Tambahkan rute lainnya sesuai kebutuhan

module.exports = router;
