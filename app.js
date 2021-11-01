const path = require('path');
const express = require('express');
const errorHandler = require('./controllers/errorController');
const paintRoutes = require('./routes/paintRouter');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/paint', paintRoutes);

app.use(errorHandler);

module.exports = app;
