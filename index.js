
// DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors')
const { v4 } = require('uuid');

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
app.listen(process.env.PORT, () => {
    console.log(`event port: ${process.env.PORT}`);
  });

  app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
  });
  
  app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
  });

  module.exports = app;