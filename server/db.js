'use strict';

const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

Mongoose.set('debug', false);
Mongoose.set('useNewUrlParser', true);
Mongoose.set('useCreateIndex', true);

Mongoose.connection.on('connected', () => {
    const {host, port, name} = Mongoose.connection;
    const {NODE_ENV} = process.env;
    console.info(`[${NODE_ENV}] Mongoose connection open @ ${host}:${port}/${name}`);
});

Mongoose.connection.on('error', err => {
    console.error('Mongoose connection error: ' + err);
});

Mongoose.connection.on('disconnected', () => {
    console.info('Mongoose connection disconnected');
});

process.on('SIGINT', () => {
    Mongoose.connection.close(() => {
        console.info('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports.connect = uri => Mongoose.connect(uri);
