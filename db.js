const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://haris:Nasution2104@cluster0.pi7ljnq.mongodb.net/?retryWrites=true&w=majority';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const isConnected = mongoose.connection.readyState === 1; // 1 berarti terkoneksi
    if (isConnected) {
      console.log('Connected to MongoDB Atlas');
    } else {
      console.error('Failed to connect to MongoDB Atlas');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDatabase;
