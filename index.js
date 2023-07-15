
// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const usersController = require('./controllers/user_controllers');
const eventController = require('./controllers/event_controllers');
const bandController = require('./controllers/band_controllers');
const placeController = require('./controllers/place_controllers');

// CONFIGURATION / MIDDLEWARE
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

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`event port: ${process.env.PORT}`);
  });