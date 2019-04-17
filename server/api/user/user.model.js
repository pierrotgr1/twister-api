'use strict';

const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({

    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    pseudo: {type: String, required: true, trim: true, unique: true, lowercase: true},
    email: String,
    pictureUrl: String,
    description: String,
    followers: [String],
    subscriptions: [String],

}, {timestamps: true});

module.exports = Mongoose.model('User', UserSchema);
