#!/usr/bin/env node

'use strict';

/* ---------- MAIN ---------- */

const SERVER = '../server';
const App = require(SERVER + '/app');
const DB = require(SERVER + '/db');

DB.connect('mongodb://localhost:27017/twister').then(() => {
  App.start(3000);
});
