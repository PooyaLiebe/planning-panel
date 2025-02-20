/* eslint-disable no-unused-vars */
import express from "express";
import mongoose from "mongoose";
import connectDB from "./db.js";
import { oilModel } from "./models/OilLubricant.js";
import { PersonelModel } from "./models/Personels.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.post("/", (req, res) => {
  const { username, password } = req.body;
  PersonelModel.findOne({ username, password }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong Password");
      }
    } else {
      res.json("No Record Existed");
    }
  });
});

app.get("/oilform", async (req, res) => {
  const response = await oilModel.find();
  return res.json({ items: response });
});

app.listen(5000, () => {
  console.log("App is running");
});
