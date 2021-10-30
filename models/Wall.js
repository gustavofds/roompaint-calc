const AppError = require('../utils/AppError');
const Door = require('./Door');
const Window = require('./Window');

class Wall {
  constructor(height, width, doorCount, windowCount) {
    this.verifyHeight(height, doorCount);
    this.verifyArea(height, width, doorCount, windowCount);

    this.height = height;
    this.width = width;
    this.doorCount = doorCount;
    this.windowCount = windowCount;
  }

  verifyHeight(height, doorCount) {
    if (height < 1.0 || height > 15.0) {
      throw new AppError(
        'Parede não pode ser menor que 1m ou maior que 15m',
        400
      );
    }

    if (doorCount > 0 && height < Door.getHeight() + 0.3) {
      throw new AppError(
        'A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta',
        400
      );
    }

    return true;
  }

  verifyArea(height, width, doorCount, windowCount) {
    const areaDoors = Door.getArea() * doorCount;
    const areaWindows = Window.getArea() * windowCount;
    const totalWallArea = height * width;
    const areasRatio = (areaDoors + areaWindows) / totalWallArea;

    if (areasRatio > 0.5) {
      throw new AppError(
        'O total de área das portas e janelas deve ser no máximo 50% da área de parede',
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
