const path = require('path');

module.exports = {
  mode: 'none',
  entry: './scripts/index.js',
  // watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
  },
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};
