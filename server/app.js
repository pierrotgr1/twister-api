'use strict';

const Express = require('express');
const Morgan = require('morgan');
const Helmet = require('helmet');
const BodyParser = require('body-parser');


/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- ROUTES ---------- */

const TweetRoute = require('./api/tweet/tweet.route');
const UserRoute = require('./api/user/user.route');

/* ---------- CONFIGURATIONS ---------- */

app.set('trust proxy', true);

app.use(Helmet());
app.use(Morgan('dev'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use('/api/tweets', TweetRoute);
app.use('/api/users', UserRoute);
app.use('/', (req, res) => res.send('Twister API'));


/* ---------- START ---------- */

app.start = (port) => {
  app.listen(port, () => console.log('Listen @ ' + 3000));
}

/* ---------- MODULE EXPORTS ---------- */

module.exports = app;
