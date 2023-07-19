const express = require('express');
const user = express.Router();
const { User_data } = require('../models'); 
const bcrypt = require('bcryptjs');

// POST / user
user.post('/', async (req, res) => {
  const { user_name, email, password } = req.body;
  // let (password) = 

  try {
    const user = await User_data.create({
      user_name,
      email,
      password_digest: await bcrypt.hash(password,10)
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});

// Get all users
user.get('/', async (req, res) => {
    try {
      const users = await User_data.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Error' });
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
      res.status(500).json({ error: 'Internal Error' });
    }
  });

//   Update by ID
  user.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { user_name, email, password } = req.body;
  
    try {
      const user = await User_data.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.user_name = user_name;
      user.email = email;
      user.password = password;
      await user.save();
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Error' });
    }
  });

// Delete 
user.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User_data.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.destroy();
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Error' });
    }
  });
module.exports = user;