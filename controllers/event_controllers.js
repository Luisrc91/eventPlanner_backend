const express = require("express");
const event = express.Router();
const  {Events_data}  = require("../models");

// POST /events


event.post("/", async (req, res) => {
  const {
    event_name,
    event_type,
    guest,
    place_name,
    date_of_event,
    start_time,
    end_time,
    description,
    picture,
    band_name
  } = req.body;
// console.log(guest)
  try {
    const event = await Events_data.create({
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
module.exports = event;
