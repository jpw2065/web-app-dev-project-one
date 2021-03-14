var path = require('path');

module.exports = {
  entry: './client/components/components.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client')
  }
};