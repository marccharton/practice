/*
* @Author: OMAO
* @Date:   2019-09-16 16:56:11
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-18 17:13:18
*/

var path = require("path");

module.exports = {
  entry: "./sketch.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  mode: "development"
};


/*module.exports = {
  entry: "./sketch.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
*/
