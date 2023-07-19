
// DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors')
const usersController = require('./controllers/user_controllers');
const eventController = require('./controllers/event_controllers');
const bandController = require('./controllers/band_controllers');
const placeController = require('./controllers/place_controllers');
const authController = require('./controllers/authentication')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Event',
    });
 
  });
  
  
//CONTROLLERS  
app.use('/users', usersController);
app.use('/events', eventController);
app.use('/bands', bandController);
app.use('/places', placeController);
app.use('/authentication', authController);

// LISTEN
app.listen(process.env.POSTGRES_URL, () => {
    console.log(`event port: ${process.env.PORT}`);
  });

  module.exports = app;