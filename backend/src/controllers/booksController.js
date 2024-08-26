const { Category, Books } = require("../models/booksModel");
var mongoose = require("mongoose");

class BooksController {
  static welcome_msz = (req, res) => {
    res.send("Welcome to book store system backend");
  };

  //NOTE - Add Book Categories =========================>
  static add_book_category = async (req, res) => {
    const { name } = req.body;

    const categoryExists = await Category.exists({ name: name });
    if (categoryExists) {
      return res.status(404).json({ error: "Category Already Exists" });
    }

    try {
      const newCat = new Category({
        name,
      });
      const category_saved = await newCat.save();
      console.log("category saved successfully:", category_saved);
      res.status(201).send({
        message: "Category saved successfully",
        category: category_saved,
      });
    } catch (err) {
      console.error("Error saving category data:", err);
      res.status(500).send("Error saving category data");
    }
  };

  //NOTE -  Get categories =========================>
  static get_categories = async (req, res) => {
    try {
      const categories = await Category.find();
      console.log("categories ===============> ", categories);
      res.status(200).send({ data: categories });
    } catch (error) {
      console.log("error ===============> ", error);
      res.status(500).send("Error fetching categories data");
    }
  };

  //NOTE - update catgories ================>
  static update_category = async (req, res) => {
    let { _id } = req.params;

    try {
      const objectIdInstance = new mongoose.Types.ObjectId(_id);
      const update = await Category.findByIdAndUpdate(
        objectIdInstance,
        { name: req.body.name },
        { new: true }
      );

      if (!update) {
        return res.status(404).send({ Message: "Category not found" });
      }

      res.status(200).send({ data: update });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
  };

  //NOTE - delete category
  static delete_category = async (req, res) => {
    let { _id } = req.params;
    try {
      const cat_id = new mongoose.Types.ObjectId(_id);

      if (!cat_id) {
        res.status(404).send({ Message: "Category not found" });
      }

      const delete_category = await Category.findOneAndDelete(cat_id);

      res
        .status(200)
        .send({ message: "delete successfully", data: delete_category });
    } catch (error) {
      console.log(error);
      res.status(404).send({ error: error });
    }
  };

  //NOTE - Add book =========================>
  static add_book = async (req, res) => {
    const {
      ISBN,
      AuthorName,
      BookTitle,
      BookCategory,
      bookPublisher,
      googleBookUrl,
      bookImage,
      bookPdf,
      price,
      quantity,
      bookDesc,
    } = req.body;

    const categoryExists = await Category.exists({ name: BookCategory });
    if (!categoryExists) {
      return res.status(400).json({ error: "Invalid Category" });
    }

    try {
      const newBook = new Books({
        ISBN,
        AuthorName,
        BookTitle,
        BookCategory,
        bookPublisher,
        googleBookUrl,
        bookImage,
        bookPdf,
        price,
        quantity,
        bookDesc,
      });

      // Save the new user document to the database
      const book_saved = await newBook.save();
      console.log("Book saved successfully:", book_saved);
      res
        .status(201)
        .send({ message: "User saved successfully", data: book_saved });
    } catch (err) {
      console.error("Error saving book data:", err);
      res.status(500).send("Error saving book data");
    }
  };

  //NOTE - Get books =========================>
  static get_books = async (req, res) => {
    try {
      const books = await Books.find();
      console.log("books ===============> ", books);
      res.status(200).send({ data: books });
    } catch (error) {
      console.log("error ===============> ", error);
      res.status(500).send("Error fetching book data");
    }
  };

  //NOTE - update book
  static update_book = async (req, res) => {
    const { _id } = req.params;
    const {
      ISBN,
      AuthorName,
      BookTitle,
      BookCategory,
      bookPublisher,
      googleBookUrl,
      bookImage,
      bookPdf,
      price,
      quantity,
      bookDesc,
    } = req.body;

    
    const categoryExists = await Category.exists({ name: BookCategory });
    if (!categoryExists) {
      return res.status(400).json({ error: "Invalid Category" });
    }

    try {
      const objectId = new mongoose.Types.ObjectId(_id);

      if (!objectId) {
        return res.status(404).send({ message: "book not found" });
      }
      const updateBook = await Books.findOneAndUpdate(
        objectId,
        {
          ISBN,
          AuthorName,
          BookTitle,
          BookCategory,
          bookPublisher,
          googleBookUrl,
          bookImage,
          bookPdf,
          price,
          quantity,
          bookDesc,
        },
        { new: true }
      );

      res
        .status(200)
        .send({ message: "book update successfully", data: updateBook });
    } catch (error) {
      console.log(error);
      res.status(404).send({ error: error });
    }
  };

  //NOTE - delete book
  static delete_book = async (req, res) => {
    const { _id } = req.params;
    try {
      const objectId = new mongoose.Types.ObjectId(_id);
      const deleteBook = await Books.findByIdAndDelete(objectId);
      res
        .status(200)
        .send({ message: "book delete successfully", data: deleteBook });
    } catch (error) {
      console.log(error);
      res.status(404).send({ error: error });
    }
  };
}

module.exports = BooksController;
