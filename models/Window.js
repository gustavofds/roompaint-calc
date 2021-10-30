const Frame = require('./Frame');
const { WINDOW_HEIGHT, WINDOW_WIDTH } = require('./utils');

class Window extends Frame {
  constructor() {
    super(WINDOW_HEIGHT, WINDOW_WIDTH);
  }
}

module.exports = Window;
