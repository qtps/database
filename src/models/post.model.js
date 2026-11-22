const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: String,
  image: { type: String, required: true },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
