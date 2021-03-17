var path = require('path');

module.exports = {
  entry: './client/components/components.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    minimize: true
  },
};