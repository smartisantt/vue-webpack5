const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const devConfig = {
  mode: 'production',
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
