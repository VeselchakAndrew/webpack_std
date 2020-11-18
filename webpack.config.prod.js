const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = require("./webpack.config.base");
const WebpackDevServer = require("webpack-dev-server");

module.exports = merge(baseConfig, {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "bundle.[chunkhash].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},

	plugins: [
		new CompressionPlugin(),
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production"),
			},
		}),
	],

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: true,
				},
			}),
		],
	},

	devtool: "inline-source-map",
});
