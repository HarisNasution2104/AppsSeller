const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/services', serviceController.createService);
// Tambahkan rute lainnya sesuai kebutuhan

module.exports = router;
