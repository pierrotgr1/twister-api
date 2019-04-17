'use strict';

const Router = require('express').Router();
const User = require('./user.model');

Router.get('/', async (req, res, next) => {
  let users = await User.find();
  res.json(users);
})

Router.post('/', async (req, res, next) => {
  let user = await User.create(req.body);
  res.json(user);
})

Router.get('/:pseudo', async (req, res, next) => {
  let user = await User.findOne({pseudo: req.params.pseudo});
  res.json(user);
})

module.exports = Router;
