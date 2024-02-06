const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  description: String,
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  assigned_technician: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: String
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
