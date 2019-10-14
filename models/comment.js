const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: String,
  review: String,
  score: Number
});

module.exports = mongoose.model("Comment", commentSchema);
