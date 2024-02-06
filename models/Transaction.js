const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: String,
  date: { type: Date, default: Date.now },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
