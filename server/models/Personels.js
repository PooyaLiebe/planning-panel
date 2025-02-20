import mongoose from "mongoose";

const PersonelSchema = mongoose.Schema({
  username: String,
  password: String,
});

export const PersonelModel = mongoose.model("Personel", PersonelSchema);
