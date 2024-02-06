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
mongoose.connect('mongodb+srv://haris:Nasution2104@cluster0.pi7ljnq.mongodb.net/nama_database?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', require('./routes/barangRoutes'));
// Tambahkan routes untuk entitas lainnya

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
