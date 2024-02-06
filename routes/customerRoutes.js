const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/customers', customerController.createCustomer);
// Implementasi endpoint untuk update dan delete

module.exports = router;
