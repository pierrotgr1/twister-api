'use strict';

const Mongoose = require('mongoose');

const TweetSchema = new Mongoose.Schema({

    message: {type: String, required: true},
    author: {type: String, required: true, trim: true},
    comments: [{}],
    likes: {type: Number, default: 0},
    tags: [],

}, {timestamps: true});

module.exports = Mongoose.model('Tweet', TweetSchema);
