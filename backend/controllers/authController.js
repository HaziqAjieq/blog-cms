const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

const User = db.User;

// Utility function for common registration logic
const registerUser = async (req, res, requiredRole, userRole) => {
  try {
    const { username, email, password, role } = req.body;

    // Verify requesting user has proper role
    if (req.user?.role !== requiredRole) {
      return res.status(403).json({ 
        message: `Only ${requiredRole}s can create users` 
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ 
      where: { [db.Sequelize.Op.or]: [{ email }, { username }]}
  });
    if (existingUser) {
      return res.status(400).json({ 
        message: "Email or username already in use" 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: userRole || (req.user.role === 'admin' ? role : 'editor')
    });

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};

// Admin creates another admin
exports.createAdmin = async (req, res, next) => {
  await registerUser(req, res, 'admin', 'admin');
};

// Admin creates regular user
exports.register = async (req, res, next) => {
  await registerUser(req, res, 'admin');
};

// Login controller
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ 
        error: "Invalid credentials", 
        auth: false 
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ 
        error: "Invalid credentials", 
        auth: false 
      });
    }

    // Include role in the JWT payload
    const token = jwt.sign(
      { 
        id: user.id,
        role: user.role  // ← THIS IS CRUCIAL
      }, 
      config.jwt.secret, 
      { expiresIn: config.jwt.expiresIn }
    );

    res.status(200).json({ 
      token, 
      role: user.role,
      message: `Welcome ${user.username}` 
    });
  } catch (error) {
    next(error);
  }
};

// loggin out


exports.logout = (req, res) => {
  // Clear the JWT cookie
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure in production
    sameSite: 'strict', // Adjust as needed
  });

  // Optional: If you have a token blacklist mechanism, add the token to it here.
  // For example: await TokenBlacklist.add(req.cookies.jwt);

  res.status(200).json({ message: 'Logged out successfully' });
};

// admin delete user

exports.deleteUser = async (req, res, next) => {
  try {
    // 1. Verify requester is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: "Only admins can delete users" });
    }

    // 2. Prevent self-deletion
    if (req.user.id === parseInt(req.params.id)) {
      return res.status(400).json({ message: "Admins cannot delete themselves" });
    }

    // 3. Delete user
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};