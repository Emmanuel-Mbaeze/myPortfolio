const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AbVerifiedUser = new Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ABuser",
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ABverification", AbVerifiedUser);
