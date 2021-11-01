const AppError = require('../utils/AppError');

module.exports = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    return res.status(err.code).json({ message: err.message });
  }

  console.log(err);

  res.status(500).json({ message: 'Something went wront' });
};
