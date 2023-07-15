const express = require("express");
const place = express.Router();
const { Place_data } = require("../models");

place.post("/", async (req, res) => {
  const { place_name, place_address, picture_place, comment, ratings } =
    req.body;

  try {
    const event = await Place_data.create({
      place_name,
      place_address,
      picture_place,
      comment,
      ratings,
    });

    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

// Get all
place.get("/", async (req, res) => {
  try {
    const places = await Place_data.findAll();
    res.json(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});
// GET by ID
place.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place_data.findByPk(id);
    if (!place) {
      return res.status(404).json({ error: "place not found" });
    }
    res.json(place);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

//   Update by ID
place.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { place_name, place_address, picture_place, comment, ratings } =
    req.body;

  try {
    const place = await Place_data.findByPk(id);
    if (!place) {
      return res.status(404).json({ error: "place not found" });
    }

    place.place_name = place_name;
    place.place_address = place_address;
    place.picture_place = picture_place;
    place.comment = comment;
    place.ratings = ratings;
    await place.save();

    res.json(place);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

// Delete
place.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place_data.findByPk(id);
    if (!place) {
      return res.status(404).json({ error: "place not found" });
    }

    await place.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});
module.exports = place;
