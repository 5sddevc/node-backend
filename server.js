const Joi = require("joi");
const express = require("express");
const users = require("./app/router/api/Users");
const hello = require("./app/router/api/Test");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


/// Database Connection
mongoose
  .connect("mongodb://localhost/lockey", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch(err => {
    console.log("Could not connect to MongoDB...", err);
  });

//// Express Setup & Routes
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", users);
app.use("/api/hello", hello);


app.listen(port, () => console.log(`Listening on port ${port}`));
