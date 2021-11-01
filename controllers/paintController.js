const Wall = require('../models/Wall');
const Room = require('../models/Room');

exports.calc = (req, res, next) => {
  try {
    const wallsArr = req.body.map(
      ({ height, width, doorCount, windowCount }) => {
        return new Wall(height, width, doorCount, windowCount);
      }
    );

    const room = new Room(wallsArr);

    res.status(200).json({
      totalPaintableArea: room.getTotalPaintableArea(),
      paintNeeded: room.calcPaintQty(),
    });
  } catch (err) {
    next(err);
  }
};
