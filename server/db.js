/* eslint-disable no-undef */
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://pooya:pooya6331@preventive.nytf8.mongodb.net/?retryWrites=true&w=majority&appName=Preventive"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
