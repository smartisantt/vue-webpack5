const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'js/[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
