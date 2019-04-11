#!/usr/bin/env node

'use strict';

/* ---------- MAIN ---------- */

const SERVER = '../server';
const App = require(SERVER + '/app');

App.start(3000);
