const express = require("express");
const event = express.Router();
const { Events_data } = require("../models");

// POST /events

event.post("/", async (req, res) => {
  const {
    user_id,
    event_name,
    event_type,
    guest,
    place_name,
    date_of_event,
    start_time,
    end_time,
    description,
    picture,
    band_name,
  } = req.body;
  // console.log(guest)
  try {
    const event = await Events_data.create({
      user_id,
      event_name,
      event_type,
      guest,
      place_name,
      date_of_event,
      start_time,
      end_time,
      description,
      picture,
      band_name,
    });
    // console.log(event)
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

event.get('/', async (req, res) => {
  try {
    const event = await Events_data.findAll();
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});

// GET by ID
event.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events_data.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});
//   Update by ID
event.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {  event_name,
    event_type,
    guest,
    place_name,
    date_of_event,
    start_time,
    end_time,
    description,
    picture,
    band_name,} = req.body;

  try {
    const event = await Events_data.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'event not found' });
    }

    event.event_name = event_name;
    event.event_type = event_type;
    event.guest = guest;
    event.place_name = place_name;

    event.date_of_event= date_of_event;
    event.start_time=start_time;
    event.end_time=end_time;
    event.description=description;
    event.picture=picture;
    event.band_name=band_name;

   
    await event.save();

    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});
// Delete 
event.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events_data.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'event not found' });
    }

    await event.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
});
module.exports = event;
