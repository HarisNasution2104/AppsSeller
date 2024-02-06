const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://username:password@cluster.mongodb.net/your_database_name';

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
