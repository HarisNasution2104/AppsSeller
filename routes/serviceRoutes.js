const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/services', serviceController.createService);
// Implementasi endpoint untuk update dan delete

module.exports = router;
