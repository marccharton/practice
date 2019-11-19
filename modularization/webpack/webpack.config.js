/*
* @Author: OMAO
* @Date:   2019-09-09 11:00:16
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-09 11:10:22
*/

var path = require ("path");

module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname),
		filename: "bundle.js"
	},
	mode: "development"
};
