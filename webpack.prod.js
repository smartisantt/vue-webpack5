const merge = require('webapck-merge');
const baseConfig = require('./webpack.config');

const devConfig = {
  mode: 'production',
  devtool: 'none',
  optimization: {
    splitChunks: {
      //分包配置
      chunks: 'all',
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2
        }
      }
    }
  }
};

module.exports = merge(baseConfig, devConfig);
