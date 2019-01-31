const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const typescript = require('./webpack/typescript');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');


module.exports = {
  entry: './src/public/js/index.js',
  node: {
    fs: 'empty',
  },
  mode: 'production',
  module: {
    rules: [
      babel,
      // typescript,
      pug,
      css,
      sass,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: './src/views/test.pug',
      chunks: false,
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
