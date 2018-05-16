var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [ // not 'loaders', 'rules' is correct
      {
        loader: 'babel-loader',
        test: /\.js$/, // regex, js or jsx
        include: APP_DIR
      }
    ]
  }
};

module.exports = config;