import mongoose from "mongoose";

const oilSchema = mongoose.Schema({
  lubricantname: String,
  type: String,
  viscosityindex: Number,
  viscosity40: Number,
  density: Number,
  pourpoint: Number,
  flashpoint: Number,
  thickener: String,
  color: String,
  nlgi: Number,
});

export const oilModel = mongoose.model("Oil Lubricant", oilSchema);
