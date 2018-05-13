const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: 5000,
		// respond to 404s with index.html
		historyApiFallback: true,
		// enable HMR on the server
		hot: true,
		open: true,
		//https: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [{ loader: 'babel-loader'}],
			},
			{
				test: /\.s(a|c)ss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
				/*use: [
					MiniCssExtractPlugin.loader,
					"css-loader", "sass-loader"
				]*/
			}
		]
	},
})