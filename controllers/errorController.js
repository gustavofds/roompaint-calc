const AppError = require('../utils/AppError');

module.exports = (err, req, res, _next) => {
  if (req.originalUrl.startsWith('/api')) {
    if (err instanceof AppError) {
      return res.status(err.code).json({ message: err.message });
    }

    return res.status(500).json({ message: 'Algo deu errado :(' });
  }

  return res.status(err.code).render('error', {
    title: 'Algo deu errado :(',
    message: err.message,
  });
};
