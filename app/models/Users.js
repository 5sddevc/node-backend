const Joi = require("joi");
const mongoose = require("mongoose");

// module.exports = async function createUser(body) {
  const user = new mongoose.Schema({
    username: {
      type:String,
      required:true,
      minlength:5,
      maxlength:16
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 16
    },
    isActivated: Boolean
  });
  // const result = await user.save();
  // console.log("Saved Result", result);
// };

function validateUser(user) {
  const schema = {
    username: Joi.string()
      .min(5, "Username too short! it must be between 5 and 16 characters")
      .max(16, "Username Too long! it must be between 5 and 16 characters")
      .required("Username Required"),
    email: Joi.string()
      .min(5, "Email too short! it must be between 5 and 16 characters")
      .max(255, "Email Too long! it must be between 5 and 16 characters")
      .email("Invalid email!")
      .required("Email Required!"),
    password: Joi.string()
      .min(5, "Password is Too Short! it must be between 5 and 16 characters")
      .max(16, "Password is Too Long! it must be between 5 and 16 characters")
      .required("Password Required")
  };
  return Joi.validate(user, schema);
};

exports.User = user;
exports.validateUser = validateUser;