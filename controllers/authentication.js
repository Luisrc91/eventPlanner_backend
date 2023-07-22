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
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET,{expiresIn: '1h'} );
    res.json({ token });
    console.log(token);
  }
});

router.get('/profile', async (req, res) => {
    res.json(req.currentUser)
  })

module.exports = router;
