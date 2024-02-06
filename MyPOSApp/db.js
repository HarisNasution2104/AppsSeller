const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://haris:Nasution2104@cluster0.pi7ljnq.mongodb.net/?retryWrites=true&w=majority';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDatabase;
