'use strict';

const Router = require('express').Router();
const Tweet = require('./tweet.model');

Router.get('/', async (req, res, next) => {
  let tweets = await Tweet.find();
  res.json(tweets);
})

Router.post('/', async (req, res, next) => {
  let tweet = await Tweet.create(req.body);
  res.json(tweet);
})

Router.get('/:id', (req, res, next) => {
  res.json({Helloo: req.params.id});
})

module.exports = Router;
