const path = require('path');
const express = require('express');
const Door = require('./models/Door');
const Window = require('./models/Window');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.status(200).send(`Área da porta: ${Door.getArea()} m2
  Área da janela: ${Window.getArea()} m2`);
});

module.exports = app;
