
// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const usersController = require('./controllers/user_controllers');



// CONFIGURATION / MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Event',
    });
  });
  
app.use('/users', usersController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`event port: ${process.env.PORT}`);
  });