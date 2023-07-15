const express = require('express');
const router = express.Router();
const { User_data } = require('../models'); 

router.post('/', async (req, res) => {
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

module.exports = router;