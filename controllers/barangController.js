const Barang = require('../models/Barang');

exports.getAllBarang = async (req, res) => {
  try {
    const barang = await Barang.find();
    res.json(barang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBarangById = async (req, res) => {
  try {
    const barang = await Barang.findById(req.params.id);
    res.json(barang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBarang = async (req, res) => {
  try {
    const barang = new Barang(req.body);
    await barang.save();
    res.status(201).json(barang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBarang = async (req, res) => {
  try {
    await Barang.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Barang updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBarang = async (req, res) => {
  try {
    await Barang.findByIdAndDelete(req.params.id);
    res.json({ message: 'Barang deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
