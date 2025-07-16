import express from "express";
import {register , login , getMe} from '../controllers/authController.js'
import {authenticate ,authorize} from '../middleware/authMiddleware.js'

let router = express.Router();

// public route
router.post('/login' , login);

// protected routes
router.get('/postform',authenticate,getMe);
router.post('/register', authenticate, authorize(['admin']), register);

export default router;