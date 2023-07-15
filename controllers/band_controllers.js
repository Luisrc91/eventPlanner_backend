const express = require("express");
const band = express.Router();
const  {Band_data}  = require("../models");

band.post("/", async (req, res) => {
    const {
      band_name,
      genre,
      event_place,
    
    } = req.body;
  // console.log(guest)
    try {
      const event = await Band_data.create({
        band_name,
        genre,
        event_place,
      });
      // console.log(event)
      res.status(201).json(event);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Error" });
    }
  });

 module.exports = band