const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Unique category names
});

const Category = mongoose.model("Category", categorySchema);

const booksSchema = new mongoose.Schema({
  ISBN: { type: String, required: true },
  AuthorName: { type: String, required: true },
  BookTitle: { type: String, required: true },
  BookCategory: {
    type: String,
    ref: "Category",
    required: true,
  },
  bookPublisher: { type: String },
  googleBookUrl: { type: String },
  bookImage: { type: String },
  bookPdf: { type: String },
  price: { type: Number },
  quantity: { type: Number, default: 1 },
  bookDesc: { type: String },
});

const Books = mongoose.model("Books", booksSchema);

module.exports = { Category, Books };
