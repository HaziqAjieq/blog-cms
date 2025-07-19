const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const config = require("../config/config");

const User = db.User;

// register for admin only to create another admin
exports.createAdmin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // verify admin
    if (User !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admins can create other admins" });
    }

    // check if exist
    const existingUser = await User.findOne({
      where: { email },
      wher: { username },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or username already in use" });
    }

    // create new admin
    const user = await User.create({
      username,
      password,
      email,
      role: "admin",
    });

    res.status(201).json({
      message: "Admin created successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// reqgister for editor
exports.register = async (req, res, next) => {
  try {
    const { username, password, email, role } = req.body;
    // check admin role
    if (User.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can register new user" });
    }

    // chech if exist
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.create({ username, password, email, role: req.user.role === 'admin' ? role : 'user'  });

    // generate JWT (no need to return token here since admin is registering another user)

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// login
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username }});
    if (!user)
      return res
        .status(401)
        .json({ error: "Wrong username or email", auth: false });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ error: "Wrong password", auth: false });

    const token = jwt.sign({ id: user.id }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    res.status(200).json({ token, message: `Welcome ${user.role}` });
  } catch (error) {
    next(error);
  }
};



// register (admin role only can register)
