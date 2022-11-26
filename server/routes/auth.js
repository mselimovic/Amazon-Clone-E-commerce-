const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const authRouter = express.Router();

// Sign UP route
authRouter.post("/api/signup", async (req, res) => {
  // get the data from client
  try {
    const { name, email, password } = req.body;

    // post data in database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User with same email already exists!" });
    }

    const hashedpassword = await bcryptjs.hash(password, 8);

    let user = new User({
      email,
      password: hashedpassword,
      name,
    });
    // return data to the client
    user = await user.save();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter;
