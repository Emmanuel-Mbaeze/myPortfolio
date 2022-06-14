const upload = require("../utils/multer");
const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getOneUser,
  deleteUser,
  UpdateUser,
  createUser,
} = require("../Controller/userController");
router.route("/").get(getAllUser);
router.route("/:id").get(getOneUser).delete(deleteUser);
router.route("/register").post(upload, createUser);
module.exports = router;
