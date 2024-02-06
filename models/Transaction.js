const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: String,
  date: { type: Date, default: Date.now },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
