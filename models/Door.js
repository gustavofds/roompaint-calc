const Frame = require('./Frame');
const { DOOR_HEIGHT, DOOR_WIDTH } = require('./utils');

class Door extends Frame {
  constructor() {
    super(DOOR_HEIGHT, DOOR_WIDTH);
  }
}

module.exports = Door;
