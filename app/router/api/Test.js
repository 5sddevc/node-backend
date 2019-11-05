const express = require('express');
const router = express.Router();
const createUser = require("../../models/Users");


//Get Users
router.get("/", (req, res) => {
  createUser({
    username: "test778",
    email: "test778@5sd.com",
    password: "Asdf1234",
    isActivated: true
  });
  res.send({ express: "Hello it works!" });
});



module.exports = router;