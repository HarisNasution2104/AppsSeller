const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

router.get('/barang', barangController.getAllBarang);
router.get('/barang/:id', barangController.getBarangById);
router.post('/barang', barangController.createBarang);
router.put('/barang/:id', barangController.updateBarang);
router.delete('/barang/:id', barangController.deleteBarang);

module.exports = router;
