var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: "/node_modules/"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '*']
  },
  devtool: 'source-map'
};
