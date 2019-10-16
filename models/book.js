const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  genre: String,
  title: String,
  subtitle: String,
  lang: String,
  cover: String,
  format: String,
  stock: Number,
  ISBN: String,
  authorId: String,
  commentId: String
});

module.exports = mongoose.model("Book", bookSchema);
