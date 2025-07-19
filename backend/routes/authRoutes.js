const express = require('express');
const router = express.Router();
const  authController  = require('../controllers/authController');
const { authenticate, adminOnly } = require('../middleware/authMiddleware');


// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', authController.login);

// @route   POST /api/auth/register
// @desc    Register a new user (admin only)
// @access  Private/Admin
router.post('/register', authenticate, adminOnly, authController.register);


// @route   POST /api/auth/create-admin
// @desc    Create another admin (admin only)
// @access  Private/Admin
router.post('/create-admin', authenticate, adminOnly, authController.createAdmin);



module.exports = router;
