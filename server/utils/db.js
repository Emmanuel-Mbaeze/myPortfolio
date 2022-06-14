const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("database is now connected...!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

module.exports = mongoose;

// const mongoose = require("mongoose");
// const url = "mongodb://localhost/DiaryDB";
// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch(() => {
//     console.log("Connection failed");
//   });
