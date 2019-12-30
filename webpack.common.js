const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve('./dist')
	},
	/*module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [{ loader: 'babel-loader'}],
			},
			{
				test: /\.s(a|c)ss$/,
				/*use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}],
			}
		]
	},*/
	plugins: [
		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),

		// do not emit compiled assets that include errors
		new webpack.NoEmitOnErrorsPlugin(),

		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin(),

		new HtmlWebPackPlugin({
			template: 'index.html'
		}),
		new CleanWebpackPlugin(/*['dist']*/)
		//new FaviconsWebpackPlugin('my-logo.png')
	]
};
