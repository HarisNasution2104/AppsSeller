const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/customers', customerController.createCustomer);
// Tambahkan rute lainnya sesuai kebutuhan

module.exports = router;
