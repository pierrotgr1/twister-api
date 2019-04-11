'use strict';

const Router = require('express').Router();

Router.get('/', (req, res, next) => {
  res.json({Hello: 'World'});
})

Router.post('/', (req, res, next) => {
  res.json({Hello: 'World'});
})

module.exports = Router;
