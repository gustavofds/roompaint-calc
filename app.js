const path = require('path');
const express = require('express');
const Wall = require('./models/Wall');
const errorHandler = require('./controllers/errorController');
const Room = require('./models/Room');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  const parede1 = new Wall(2.2, 2, 0, 0);
  const parede2 = new Wall(2.2, 2, 0, 0);
  const parede3 = new Wall(2.2, 2, 0, 0);
  const parede4 = new Wall(2.2, 2, 0, 0);
  const room1 = new Room([parede1, parede2, parede3, parede4]);

  res.status(200).json({
    totalArea: parede1.getTotalArea(),
    areasPortas: parede1.getDoorsArea(),
    areasJanelas: parede1.getWindowsArea(),
    areaPintavel: parede1.getPaintableArea(),
    areaPintavelQUARTO: room1.getTotalPaintableArea(),
    titas: room1.calcPaintQty(),
  });
});

app.use(errorHandler);

module.exports = app;
