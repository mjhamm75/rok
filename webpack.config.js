var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '..', '..', 'src')
    }, {
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192'
    },{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
};