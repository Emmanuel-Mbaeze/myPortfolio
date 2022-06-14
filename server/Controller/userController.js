const userModel = require("../model/userModel");
const verifiedModel = require("../model/Verifiedmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const transport = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find();
    res.status(200).json({
      status: "all users gotten",
      data: allUser,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: "getting all users failed",
    });
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

const createUser = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const salt = await bcrypt.genSalt(process.env.SALT);
    const hashed = await bcrypt.hash(password, salt);
    const image = await cloudinary.uploader.upload(req.file.path);
    const user = await userModel.create({
      email,
      userName,
      password: hashed,
      avatar: image.secure_url,
      avatarID: image.public_ID,
    });
    const dataToken = crypto.randomBytes(7).toString("hex");
    console.log(dataToken);

    const token = jwt.sign({ dataToken }, process.env.SECRET, {
      expiresIn: process.env.EXPIRES,
    });

    const mailOptions = {
      from: "no-reply@gmail.com",
      to: email,
      subject: "Account verification",
      html: `
             <h3>this is for your account verification click the
             <a
             href="http://localhost:0101/api/user/${user._id}/${token}"
             >Link</a> to continur,Link expires in 20 minutes
             </h3>`,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Message sent", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

const transport1 = {
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};

const createUser1 = async (req, res) => {
  try {
    const { email, password, userName } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const image = await cloudinary.uploader.upload(req.file.path);
    const user = await userModel.create({
      email,
      userName,
      password: hashed,
      avatar: image.secure_url,
      avatarID: image.public_ID,
    });
    const dataToken = crypto.randomBytes(7).toString("hex");
    console.log(dataToken);
    const token = jwt.sign({ dataToken }, process.env.SECRET, {
      expiresIn: process.env.EXPIRES,
    });
    const mailOptions1 = {
      from: "no-reply@gmail.com",
      to: email,
      subject: "Account Verification",
      html: `
        <h3>Click <a href="http://localhost:0101/api/user/${user._id}/${token}">Link</a> to verify account,link expires in 20 minutes</h3>  
        `,
    };
    transport1.sendMail(mailOptions1, (err, info) => {
      if (err) {
        console.log("Message not sent");
      } else {
        console.log("Message sent", info.response);
      }
    });
    res.status(201).json({
      message: "A mail has been sent to your inbox check for confirmation",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const verifyUser1 = async (req, res) => {
  try {
    const oneUser = await userModel.findById(req.params.id);
    if (oneUser) {
      if (oneUser.verifiedToken !== "") {
        await userModel.findByIdAndUpdate(
          oneUser._id,
          {
            verified: true,
            verifiedToken: "",
          },
          { new: true }
        );
        await verifiedModel.findByIdAndUpdate(
          oneUser._id,
          {
            userID: oneUser._id,
            token: "",
          },
          { new: true }
        );
        res.status(200).json({
          message: "Verification complete proceed to signin",
        });
      } else {
        res.status(404).json({
          message: "you are not verified yet",
        });
      }
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const VerifyUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
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
        await verifiedModel.findByIdAndUpdate(
          user._id,
          {
            userID: user._id,
            token: "",
          },
          { new: true }
        );
        res.status(200).json({
          message: "Verification complete proceed to signin",
        });
      } else {
        res.status(404).json({
          message: "user not yet verified",
        });
      }
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        if (user.verified && user.verifiedToken === "") {
          const myToken = jwt.sign(
            {
              _id: user._id,
              verified: user.verified,
            },
            process.env.SECRET,
            { expiresIn: "2d" }
          );
          const { password, ...info } = user._doc;

          res.status(404).json({
            message: `welcome back ${user.userName}`,
            data: { myToken, ...info },
          });
        } else {
          const mailOptions = {
            from: "no-reply@gmail.com",
            to: email,
            subject: "signin Verification",
            html: `
        <h3>
            This is to verify your account, please click the <a
            href="http://localhost:2222/api/user/${user._id}/${user.token}"
            >Link</a> to continue, this link expires in 20mins
        </h3>
    `,
          };

          transport.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err.message);
            } else {
              console.log("Message has been sent", info.response);
            }
          });
          res.status(201).json({
            message:
              " Account need to be Verified before login,check inbox for verification mail.",
          });
        }
      } else {
        res.status(404).json({
          message: "incorrect password",
        });
      }
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const signupUser = async (res, res) => {
  try {
    const { email, password, userName } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const image = await cloudinary.uploader.upload(req.file.path);
    const user = await userModel.create({
      email,
      userName,
      password: hashed,
      avatar: image.secure_url,
      avatarID: image.public_ID,
    });
    const dataToken = crypto.randomBytes(7).toString("hex");
    console.log(dataToken);
    const token = jwt.sign({ dataToken }, process.env.SECRET, {
      expiresIn: process.env.EXPIRES,
    });
    const mailOptions = {
      from: "no-reply@gmail.com",
      to: email,
      subject: "Account verification",
      html: `
            <h3>
                This is to verify your account, please click the <a
                href="http://localhost:2222/api/user/${user._id}/${user.token}"
                >Link</a> to continue, this link expires in 20mins
            </h3>
            `,
    };
    transport.sendMail(mailOptions, (err, info) => {
      if (error) {
        console.log("Message not sent ");
      } else {
        console.log("Message sent ", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  getAllUser,
  getOneUser,
  UpdateUser,
  deleteUser,
  createUser,
};
