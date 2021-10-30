const AppError = require('../utils/AppError');

class Wall {
  constructor(height, width, doorCount, windowCount) {
    this.verifyHeight(height);

    this.height = height;
    this.width = width;
    this.doorCount = doorCount;
    this.windowCount = windowCount;
  }

  verifyHeight(height) {
    if (height < 1.0 || height > 15.0) {
      throw new AppError(
        'Parede não pode ser menor que 1m ou maior que 15m',
        400
      );
    }

    return true;
  }

  getArea() {
    return this.height * this.width;
  }
}

module.exports = Wall;
