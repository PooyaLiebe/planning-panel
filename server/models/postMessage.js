import mongoose from "mongoose";

const postSchema = mongoose.Schema({
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

const PostMessage = mongoose.model("LubricantPM", postSchema);

export default PostMessage;
