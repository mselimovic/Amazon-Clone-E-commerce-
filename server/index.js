// Imports from packages
const express = require("express");
const mongoose = require("mongoose");
const dbkey = require("../key/key.js");

// Imports from other files
const authRouter = require("./routes/auth.js");

// INIT
const PORT = 3000;
const app = express();
const DB = dbkey;

// middleware
app.use(express.json());
app.use(authRouter);

// connections to database
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

// creating an API

app.listen(PORT, () => {
  console.log(`Connected at port ${PORT}`);
});
