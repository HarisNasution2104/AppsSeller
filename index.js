const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Koneksi ke MongoDB Atlas
mongoose.connect('mongodb+srv://haris:Nasution2104@cluster0.pi7ljnq.mongodb.net/nama_database?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Membuat model untuk produk
const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  stock: Number,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

app.post('/add-product', async (req, res) => {
  const { name, price, stock } = req.body;

  try {
    await Product.create({ name, price, stock });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error adding product');
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
