const Frame = require('./Frame');

class Wall extends Frame {
  constructor(height, width, doorCount, windowCount) {
    this.height = height;
    this.width = width;
    this.doorCount = doorCount;
    this.windowCount = window;
  }

  verifyHeight(height) {}
}

module.exports = Wall;
