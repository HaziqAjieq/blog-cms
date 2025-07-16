import jwt from "jsonwebtoken";
import  User from "../models/user.js";

import dotenv from 'dotenv';
dotenv.config()

const register = async(req , res) => {
  try{
    // only admin role can register new user
    if(req.user.role !== 'admin') {
      return res.status(403).json({
        error: 'Only Admins can register users'
      });
    }

    const {username , email , password , role } = req.body;

    // validate role
    if(!['admin' , 'editor'].includes(role)) {
      return res.status(400).json({
        error:'Invalid role'
      });
    }

    const user = await User.create({
      username,
      email,
      password,
      role
    })

    res.status(201).json({
      id:user.id,
      username:user.username,
      email:user.email,
      role:user.role
    });
  } catch(err){
    if (err.name === 'SequelizeUniqueConstraintError'){
      return res.status(400).json({ error: 'Username or email already exists'});
    } 
    res.status(500).json({err: 'Server error'})
  }
}


const login = async (req , res) => {
  try{
    const {email , password} = req.body;

    const user = await User.findOne({ where:{ email } });

    if(!user) {
      return res.status(400).json({error: "Invalid credentials"});
    }

    const isMatch = await user.comparePassword(password);

      if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {id:user.id , role: user.role},
      process.env.JWT_SECRET,
      { expiresIn:'1h'}
    );

    res.json({
      token,
      user:{
        id: user.id,
        usename:user.username,
        email:user.email,
        role:user.role
      }
    });

  } catch (err){
    res.status(500).json({ err: "Server error"});
  }
};

const getMe = async (req , res) => {
  try{
    const user = await User.findByPk(req.user.id, {
      attributes: ['id' , 'username' , 'email' , 'role']
    });

    if(!user){
      return res.status(404).json({error:'User not found'})
    }

    res.json(user);
  } catch(err){
    res.status(500).json({err:'Server error'})
  }
}

export  {register,login, getMe}