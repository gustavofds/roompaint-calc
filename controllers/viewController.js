const ejs = require('ejs');

exports.getHome = (req, res, next) => {
  res.status(200).render('home');
};
