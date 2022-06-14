const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AbusedUser = new Schema(
  {
    Fullname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
    Location: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
    verifiedToken: {
      type: String,
    },
    NGO: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ABuser", AbusedUser);
