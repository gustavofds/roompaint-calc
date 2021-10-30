const { DOOR_HEIGHT, DOOR_WIDTH } = require('./utils');

class Door {
  static _height = DOOR_HEIGHT;
  static _width = DOOR_WIDTH;

  static getArea() {
    return this._height * this._width;
  }
}

module.exports = Door;
