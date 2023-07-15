const user = require('express').Router()
const db = require('../models')
const { User_data } = db 
const { Op } = require('sequelize')


user.post('/', async (req, res) => {
    const { user_name, email, password } = req.body;
  
    try {
      const user = await User_data.create({
        user_name,
        email,
        password
      });
  
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = user