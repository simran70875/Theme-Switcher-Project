const BooksController = require("../controllers/booksController");
const express = require("express");
const router = express.Router();

router.get("/", BooksController.welcome_msz);

// book categories
router.post("/add_cat", BooksController.add_book_category);
router.get("/view_cats", BooksController.get_categories);
router.put("/edit_cats/:_id", BooksController.update_category);
router.delete("/delete_cats/:_id", BooksController.delete_category);

// books details
router.post("/add_book", BooksController.add_book);
router.get("/view_books", BooksController.get_books);
router.put("/edit_book/:_id", BooksController.update_book);
router.delete("/delete_book/:_id", BooksController.delete_book);

module.exports = router;
