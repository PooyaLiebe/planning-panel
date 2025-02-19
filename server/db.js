/* eslint-disable no-undef */
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://pooyapayvar25:Po@6331@preventivewebapp.i7vs6.mongodb.net/?retryWrites=true&w=majority&appName=preventiveWebApp",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
