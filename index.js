// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const usersController = require("./controllers/user_controllers");
const eventController = require("./controllers/event_controllers");
const authController = require("./controllers/authentication");
const defineCurrentUser = require("./middleware/defineCurrentUser");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(defineCurrentUser);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Event",
  });
});

//CONTROLLERS
app.use("/users", usersController);
app.use("/events", eventController);

app.use("/authentication", authController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`event port: ${process.env.PORT}`);
});
