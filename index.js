// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const usersController = require("./controllers/user_controllers");
const eventController = require("./controllers/event_controllers");
const authController = require("./controllers/authentication");
const defineCurrentUser = require("./middleware/defineCurrentUser");
const path = require("path")

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(defineCurrentUser);
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Event",
  });
});

//CONTROLLERS
app.use("/users", usersController);
app.use("/events", eventController);

app.use("/authentication", authController);
// // serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, 'public', 'build')));
// }

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`event port: ${process.env.PORT}`);
});

module.exports = app;