/* eslint-disable no-unused-vars */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./Routes/posts.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://pooya:pooya6331@preventive.nytf8.mongodb.net/?retryWrites=true&w=majority&appName=Preventive"; // Replace with your actual password!
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL) // Remove the options object entirely
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);  // REMOVE THIS LINE COMPLETELY
