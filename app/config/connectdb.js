import mongoose from 'mongoose';

const connectDB = async () => {
  try {
     mongoose.connect('mongodb+srv://Alchemist_man:esi2022esi@cluster1.pueofkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(()=>{
      console.log('connected to db');
     }).catch((err)=>{
      console.log('failed to connect to data base' , er);
     });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

export default connectDB;
