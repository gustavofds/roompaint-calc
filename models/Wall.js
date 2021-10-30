const Frame = require('./Frame');

class Wall extends Frame {
  constructor(height, width, doorCount, windowCount) {
    super(height, width);
  }
}

module.exports = Wall;
