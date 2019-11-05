const Joi = require('joi');
const express = require('express');
const router = express.Router();
const validateUser = require('../../models/Users');

//Get Users
router.get('/', (req, res) => {
  res.send(users);
});

//Create User
router.post('/', (req, res) => {
  const { error } = validateUser(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
});

// Update User
router.put('/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  const { error } = validateUser(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  user.name = req.body.name; 
  res.send(user);
});

// Delete a User
router.delete('/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.send(user);
});

// Get a User by id
router.get('/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
});



module.exports = router;