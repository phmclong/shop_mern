const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // const role = "_customer";

  let userCreated = await User.findOne({ email: email });

  if (userCreated) {
    return res.status(400).json({ message: "User already created!" });
  }

  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        email: email,
        password: hashedPw,
        name: name,
        // role: role,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User created!", userId: result._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let loadedUser;
  let exposeRole;
  User.findOne({ email: email }) //tìm tài khoản và so sánh với mật khẩu đã hash
    .then((user) => {
      if (!user) {
        const error = new Error("A user with this email could not be found.");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }

      if (loadedUser.role === "_admin") {
        exposeRole = "admin";
      }
      if (loadedUser.role === "_customer") {
        exposeRole = "customer";
      }
      if (loadedUser.role === "_superadmin") {
        exposeRole = "superadmin";
      }

      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
          role: loadedUser.role,
        },
        "secret",
        { expiresIn: "1h" }
      );
      res 
        .status(200)
        .json({
          idToken: token,
          role: exposeRole,
          userId: loadedUser._id.toString(),
          expiresIn: "3600",
        });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.resetPassword = (req, res, next) => {};
