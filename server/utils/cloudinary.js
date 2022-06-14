const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "lifeofmanel",
  api_key: "756732784376797",
  api_secret: "T-JxigRcWiPSCnzwlT87W9z5up8",
  secure: true,
});
module.exports = cloudinary;
