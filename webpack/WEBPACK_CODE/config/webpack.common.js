const os = require("os");
const path = require("path");

const threads = os.cpus().length; //cpu核数

module.exports = {
	entry: {
		main: "./src/main.js",
		other: "./src/other.js",
	},
	output: {
		// 入口文件打包输出文件名
		filename: "static/js/[name].[contenthash:6].js",
		// 给打包输出的其他文件命名
		chunkFilename: "static/js/[name].[contenthash:8].js",
		// 图片、字体等通过type: asset处理资源命名方式
		assetModuleFilename: "static/media/[hash:10][ext][query]",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				// exclude: /node_modules/, // 排除node_modules中的js文件(这些文件不处理)
				include: path.resolve(__dirname, "../src"), //只处理src下的文件, 其他文件不处理
				use: [
					{
						loader: "thread-loader", //开启多进程
						options: {
							workers: threads,
						},
					},
					{
						loader: "babel-loader",
						options: {
							// 	presets: ["@babel/preset-env"], // 智能预设
							cacheDirectory: true, // 开启babel缓存
							cacheCompression: false, // 关闭缓存文件压缩
							plugins: ["@babel/plugin-transform-runtime"], //减少代码体积
						},
					},
				],
			},
		],
	},
	plugins: [],
	mode: "",
};
