const express = require('express');
const app = express();

/**
 * Import routes
 */
let appRoutes = require('./app');

/**
 * App Routes
 */
app.use('/', appRoutes);

module.exports = app;