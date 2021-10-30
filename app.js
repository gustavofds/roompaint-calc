const path = require('path');
const express = require('express');
const Door = require('./models/Door');
const Window = require('./models/Window');
const Wall = require('./models/Wall');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  const parede1 = new Wall(500, 2, 1, 1);
  res.status(200).send(`
  Área da porta: ${Door.getArea()} m2\n
  Área da janela: ${Window.getArea()} m2\n
  Área da parede1: ${parede1.getArea()}m2
  `);
});

module.exports = app;
