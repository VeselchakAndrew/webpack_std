const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],

	devtool: "inline-source-map",
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: false,
					ecma: 6,
					mangle: true,
				},
				sourceMap: false,
			}),
		],
	},
});
