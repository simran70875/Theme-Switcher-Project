const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/booksModel.js");
const router = require("./routes/routes.js");

var uri = "mongodb://127.0.0.1:27017/BMS";
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static("public"));
app.set("view-engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

module.exports = app;
