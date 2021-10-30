const AppError = require('../utils/AppError');
const Wall = require('./Wall');

class Room {
  constructor(wallsArray) {
    this.wallsArray = wallsArray;
  }

  getTotalPaintableArea() {
    return this.wallsArray.reduce((prev, curr) => {
      return prev + curr.getPaintableArea();
    }, 0);
  }
}

module.exports = Room;
