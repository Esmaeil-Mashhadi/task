import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Alchemist_man:esi2022esi@cluster1.pueofkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

export default connectDB;
