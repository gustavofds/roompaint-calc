const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'public/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  mode: 'development',
};
