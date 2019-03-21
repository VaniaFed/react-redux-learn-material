module.exports = {
  test: /\.sass|scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
};
