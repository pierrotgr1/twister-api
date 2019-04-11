'use strict';

const Mongoose = require('mongoose');

const TweetSchema = new Mongoose.Schema({

    message: String,
    author: String,
    comments: [{}],
    likes: Number,
    date: {type: Date, default: Date.now()},
    tags: [],

});

module.exports = Mongoose.model('Tweet', TweetSchema);
