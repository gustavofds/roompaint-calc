const { WINDOW_HEIGHT, WINDOW_WIDTH } = require('../utils/standardMeasures');

class Window {
  static _height = WINDOW_HEIGHT;
  static _width = WINDOW_WIDTH;

  static getArea() {
    return this._height * this._width;
  }
}

module.exports = Window;
