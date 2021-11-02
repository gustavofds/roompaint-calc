const path = require('path');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./controllers/errorController');
const paintRoutes = require('./routes/paintRouter');
const viewRouter = require('./routes/viewRouter');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);
app.use('/api/paint', paintRoutes);

app.use(errorHandler);

module.exports = app;
