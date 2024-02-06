const mongoose = require('mongoose');

const barangSchema = new mongoose.Schema({
  nama: String,
  harga: Number,
  stok: Number,
});

const Barang = mongoose.model('Barang', barangSchema);

module.exports = Barang;
