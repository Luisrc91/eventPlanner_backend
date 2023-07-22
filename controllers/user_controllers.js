const express = require("express");
const user = express.Router();
const { User_data } = require("../models");
const bcrypt = require("bcryptjs");

// POST / user
// POST /user
user.post('/', async (req, res) => {
  let { password, ...rest } = req.body;
  try {
    const user = await User_data.create({
      ...rest,
      role: 'reviewer',
      password_digest: await bcrypt.hash(password, 10),
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});

// POST /user/login
user.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User_data.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password_digest);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If login is successful, you can log the user details here
    console.log('User login successful:', user.email);

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});

// Get all users
user.get("/", async (req, res) => {
  try {
    const users = await User_data.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});

// GET by ID
user.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User_data.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});

//   Update by ID
user.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { user_name, email, password } = req.body;

  try {
    const user = await User_data.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.user_name = user_name;
    user.email = email;
    user.password = password;
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});

// Delete
user.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User_data.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});
module.exports = user;
