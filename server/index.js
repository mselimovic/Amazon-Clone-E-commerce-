// Imports from packages
const express = require("express");
const mongoose = require("mongoose");
const dbkey = require("../key/key.js");
const adminRouter = require("./routes/admin.js");

// Imports from other files
const authRouter = require("./routes/auth.js");
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");

// INIT
const PORT = 3000;
const app = express();
const DB = dbkey;

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
