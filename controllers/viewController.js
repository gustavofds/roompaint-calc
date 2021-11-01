const { MAX_WALLS_QTY } = require('../utils/standardMeasures');

exports.getHome = (_req, res) => {
  const wallsQty = MAX_WALLS_QTY;

  res.status(200).render('index', { wallsQty });
};
