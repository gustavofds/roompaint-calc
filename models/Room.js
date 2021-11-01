class Room {
  constructor(wallsArray) {
    this.wallsArray = wallsArray;
  }

  getTotalPaintableArea() {
    return this.wallsArray.reduce((prev, curr) => {
      return prev + curr.getPaintableArea();
    }, 0);
  }

  calcPaintQty() {
    const totalLitersNeeded = this.getTotalPaintableArea() / 5;

    const gal18 = Math.trunc(totalLitersNeeded / 18);
    let remainder = totalLitersNeeded % 18;
    const gal3d6 = Math.trunc(remainder / 3.6);
    remainder %= 3.6;
    const gal2d5 = Math.trunc(remainder / 2.5);
    remainder %= 2.5;
    const gal0d5 = Math.ceil(remainder / 0.5);

    return {
      gal18,
      gal3d6,
      gal2d5,
      gal0d5,
    };
  }
}

module.exports = Room;
