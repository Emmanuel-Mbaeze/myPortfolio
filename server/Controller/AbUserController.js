const userModel = require("../model/AbUser");
const Verifiedmodel = require("../model/AbVerifiedUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv");
const cloudinary = require("../utils/cloudinary");
const allUser = async (req, res) => {
  try {
    const AllUser = await userModel.find();
    res.status(201).json({
      status: "All users gotten",
      data: AllUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await userModel.findById(req.params.id);
    res.status(200).json({
      status: "single user gotten",
      data: oneUser,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: "getting one user failed",
    });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const newUser = await userModel.findByIdAndUpdate(req.body, req.params.id, {
      new: true,
    });
    res.status(200).json({
      status: "updated sucessful",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: "update failed",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const removeUser = await userModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      data: removeUser,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: "delete failed",
    });
  }
};
const transport = {
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};
const signupUser = async (req, res) => {
  try {
    const { Fullname, email, password, userName, Location } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const image = await cloudinary.uploader.upload(req.file.path);
    const user = await userModel.create({
      email,
      Location,
      Fullname,
      password: hashed,
      userName,
      NGO: false,
      avatar: image.secure_url,
      avatarID: image.public_id,
    });

    const dataToken = crypto.randomBytes(7).toString("hex");
    console.log(dataToken);
    const token = jwt.sign({ dataToken }, process.env.SECRET, {
      expiresIn: "1d",
    });
    const mailOptions = {
      from: "no-reply@gmail.com",
      to: email,
      subject: "Account Verification",
      html: `
            <h3>Click <a
            href="http://localhost:0101"
            >Link </a> to verify account,link expires in 1 day</h3>
            `,
    };
    transport.sendMail(mailOptions, (err, ...info) => {
      if (err) {
        console.log("Message not sent");
      } else {
        console.log("Message sent", info.response);
      }
    });
    res.status(201).json({
      message:
        "Please Verify your account before loggin in, check your inbox fro verification!!!",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const signupNgo = async (req, res) => {
  try {
    const { Fullname, email, password, userName, Location } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const image = await cloudinary.uploader.upload(req.file.path);
    const user = await userModel.create({
      email,
      Location,
      Fullname,
      password: hashed,
      userName,
      NGO: true,
      avatar: image.secure_url,
      avatarID: image.public_id,
    });

    const dataToken = crypto.randomBytes(7).toString("hex");
    console.log(dataToken);
    const token = jwt.sign({ dataToken }, process.env.SECRET, {
      expiresIn: "1d",
    });
    const mailOptions = {
      from: "no-reply@gmail.com",
      to: email,
      subject: "Account Verification",
      html: `
            <h3>Click <a
            href="http://localhost:0101"
            >Link </a> to verify account,link expires in 1 day</h3>
            `,
    };
    transport.sendMail(mailOptions, (err, ...info) => {
      if (err) {
        console.log("Message not sent");
      } else {
        console.log("Message sent", info.response);
      }
    });
    res.status(201).json({
      message:
        "Please Verify your account before loggin in, check your inbox for verification!!!",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const verifyUser = async (req, res) => {
  const user = await Verifiedmodel.findBy(req.params.id);
  if (user) {
    if (user.verifiedToken !== "") {
      await userModel.findByIdAndUpdate(
        user._id,
        {
          verified: true,
          verifiedToken: "",
        },
        { new: true }
      );
      await Verifiedmodel.findByIdAndUpdate(
        user._id,
        {
          userID: user._id,
          token: "",
        },
        { new: true }
      );
      res.status(201).json({
        message: "Verification complete,proceed to signup",
      });
    } else {
      res.status(404).json({
        message: "user not verified yet",
      });
    }
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
  try {
  } catch (error) {
    console.log(error.message);
  }
};
// const allUser = async (req,res)=>{
//     try {

//     } catch (error) {
//         console.log(error.message);
//     }
// }
module.exports = {
  allUser,
  deleteUser,
  oneUser,
  UpdateUser,
  signupNgo,
  signupUser,
  verifyUser,
};
