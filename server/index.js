// Imports from packages
const express = require("express");
const mongoose = require("mongoose");

// Imports from other files
const authRouter = require("./routes/auth.js");

// INIT
const PORT = 3000;
const app = express();

// middleware
app.use(authRouter);

// connections to database
mongoose
  .connect()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

// creating an API

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
