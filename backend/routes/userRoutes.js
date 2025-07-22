const express = require('express');
const router = express.Router();
const db = require("../models");
const config = require("../config/config");


const User = db.User;
router.get('/users' , async (req ,res) => {
  try{
    const users = await User.findAll({
      attributes: {exclude: ['password']}
    });
    res.json(users)
  }catch(error){
    console.error('Error fetching users:' , error);
    res.status(500).json({message : 'Server Error' , error})
  }
})

router.get('/users/:id' , async (req ,res) => {
  try{
    const user = await User.findByPk(req.params.id , {
      attributes: {exclude: ['password']}
    });
    if(!user) {
      return  res.status(404).json({error :'User not found'});
    }
    res.json(user);

  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error'})
  }
})


 module.exports = router;