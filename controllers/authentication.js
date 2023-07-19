const router = require("express").Router();
const { User_data } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  let user = await User_data.findOne({
    where: { email: req.body.email },
  });

  if (
    !user ||
    !(await bcrypt.compare(req.body.password, user.password_digest))
  ) {
    res.status(404).json({
      message: `Could not find a user with the provided username and password`,
    });
  } else {
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET);
    res.json({ user: user, token: token });
    console.log(token);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const [authenticationMethod, token] = req.headers.authorization.split(" ");

    if (authenticationMethod == "Bearer") {
      const result = await jwt.verify(token, process.env.JWT_SECRET);
      const { id } = result;

      let user = await User.findOne({
        where: {
          userId: id,
        },
      });
      res.json(user);
    }
  } catch {
    res.json(null);
  }
});

module.exports = router;
