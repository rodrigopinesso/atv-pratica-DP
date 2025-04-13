import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongo finalmente conectou');
  } catch (error) {
    console.error('mongo deu erro:', error.message);
    process.exit(1);
  }
};

console.log('uri recebida:', process.env.MONGO_URI);

export default connectDB;