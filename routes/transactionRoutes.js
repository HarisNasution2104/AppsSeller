const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.createTransaction);
// Implementasi endpoint untuk update dan delete

module.exports = router;
