/* eslint-disable no-unused-vars */
import express from "express";
import mongoose from "mongoose";
import connectDB from "./db.js";

const app = express();

connectDB();

app.listen(3000, () => {
  console.log("Server is Running");
});
