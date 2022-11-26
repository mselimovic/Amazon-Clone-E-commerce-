const express = require("express");

const authRouter = express.Router();

authRouter.post("/api/signup", (req, res) => {
  // get the data from client
  const { name, email, password } = req.body;
  // post data in database
  // return data to the client
});

module.exports = authRouter;
