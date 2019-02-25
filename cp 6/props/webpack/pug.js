module.exports = {
  test: /\.pug$/,
  use: ['html-loader?attrs=false', 'pug-html-loader'],
};
