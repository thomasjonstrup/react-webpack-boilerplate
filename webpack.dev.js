const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
///const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: 8000,
		// respond to 404s with index.html
		historyApiFallback: true,
		// enable HMR on the server
		hot: true,
		open: true,

		overlay: {
			warnings: true,
			errors: true
		}
		//https: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{ loader: 'babel-loader' }]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
				/*use: [
					MiniCssExtractPlugin.loader,
					"css-loader", "sass-loader"
				]*/
			}
		]
	}
	//plugins: [new ErrorOverlayPlugin()],
});
