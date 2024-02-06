const express = require('express');
const connectToDatabase = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Koneksi ke MongoDB
connectToDatabase();

// Gunakan rute produk
app.use('/api', productRoutes);
// Gunakan rute lainnya sesuai kebutuhan

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
