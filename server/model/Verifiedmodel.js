const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const verified = new Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Verifieds", verified);
