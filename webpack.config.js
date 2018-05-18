var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/outputs');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: {
    login: APP_DIR + '/index_login.js',
    signup: APP_DIR + '/index_signup.js',
    chatroom: APP_DIR + '/index_chatroom.js',
  }, 
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [ // not 'loaders', 'rules' is correct
      {
        loader: 'babel-loader',
        test: /\.js$/, // regex, js or jsx
        include: APP_DIR,
        exclude: '/node_modules',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};

module.exports = config;