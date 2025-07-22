const express = require('express');
const router = express.Router();
const  authController  = require('../controllers/authController');

const { authenticate, adminOnly } = require('../middleware/authMiddleware');


// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', authController.login);

router.post('/logout', authController.logout);

// @route   POST /api/auth/register
// @desc    Register a new user (admin only)
// @access  Private/Admin
router.post('/register', authenticate, adminOnly, authController.register);

router.delete('/users/:id', authenticate, adminOnly, authController.deleteUser);





module.exports = router;
