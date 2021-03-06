const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

  entry: "./js/app.js",
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
    })
]
};