const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Manel's web" });
});

app.listen(port, () => {
  console.log("connectimg to server ...!");
});
