const express = require("express");
const band = express.Router();
const { Band_data } = require("../models");

band.post("/", async (req, res) => {
  const { band_name, genre, event_place } = req.body;

  try {
    const event = await Band_data.create({
      band_name,
      genre,
      event_place,
    });
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});
// Get all bands
band.get("/", async (req, res) => {
  try {
    const bands = await Band_data.findAll();
    res.json(bands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

// Get by Id band
band.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const band = await Band_data.findByPk(id);
    if (!band) {
      return res.status(404).json({ error: "Band not Found" });
    }
    res.json(band);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

//   Update by ID
band.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { band_name, genre, event_place } = req.body;

  try {
    const band = await Band_data.findByPk(id);
    if (!band) {
      return res.status(404).json({ error: "Band Not Found" });
    }

    band.band_name = band_name;
    band.genre = genre;
    band.event_place = event_place;
    await band.save();

    res.json(band);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});

// Delete
band.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const band = await Band_data.findByPk(id);
    if (!band) {
      return res.status(404).json({ error: "Band not Found" });
    }

    await band.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error" });
  }
});
module.exports = band;
