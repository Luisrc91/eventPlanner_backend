const express = require("express");
const place = express.Router();
const  {Place_data}  = require("../models");

place.post("/", async (req, res) => {
    const {
      place_name,
      place_address,
      picture_place,
      comment,
      ratings
    } = req.body;
  // console.log(guest)
    try {
      const event = await Place_data.create({
        place_name,
        place_address,
        picture_place,
        comment,
        ratings
      });
      // console.log(event)
      res.status(201).json(event);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Error" });
    }
  });

module.exports = place