const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/transactionRoutes'));
app.use('/api', require('./routes/customerRoutes'));
app.use('/api', require('./routes/serviceRoutes'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
