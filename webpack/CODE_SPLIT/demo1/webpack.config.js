const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// 有多个入口文件,多入口
	entry: {
		app: "./src/app.js",
		main: "./src/main.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js", //webpack命名方式，[name]以文件名为自己命名
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
		}),
	],
	mode: "production",
};
