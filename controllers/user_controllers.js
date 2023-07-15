const express = require('express');
const user = express.Router();
const { User_data } = require('../models'); 

// POST
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

// Get all users
user.get('/', async (req, res) => {
    try {
      const users = await User_data.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// GET by ID
  user.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User_data.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



module.exports = user;