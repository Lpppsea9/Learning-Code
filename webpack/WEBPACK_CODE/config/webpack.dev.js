const path = require("path"); // nodejs核心模块, 专门用来处理路径问题
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// 入口
	entry: "./src/main.js", // 相对路径
	// 输出
	output: {
		// 所有文件的输出路径
		// 开发模式没有输出
		path: undefined, // 绝对路径
		// 入口文件打包输出文件名
		filename: "static/js/main.js",
	},
	// 加载器
	module: {
		rules: [
			// loader的配置
			{
				test: /\.css$/, // 只检测.css文件
				use: [
					//执行顺序，从右到左 （从下到上）
					"style-loader", // 将js中css通过创建style标签添加html文件中生效
					"css-loader", // 将css资源编译成commonjs模块到js中
				],
			},
			{
				test: /\.less$/,
				// loader: 'xxx', // 只能使用1个loader
				use: [
					// 使用多个loader
					"style-loader",
					"css-loader",
					"less-loader", // 将less编译成css文件
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader", // 将sass编译成css文件
				],
			},
			{
				test: /\.styl$/,
				use: [
					"style-loader",
					"css-loader",
					"stylus-loader", // 将stylus编译成css文件
				],
			},
			{
				test: /\.(png|jpe?g|gif|webp|svg)$/,
				type: "asset", // 转成base64的格式
				parser: {
					dataUrlCondition: {
						// 小于10kb的图片转base64
						// 优点: 减少请求数量 缺点: 体积会更大
						maxSize: 10 * 1024, // 10kb
					},
				},
				generator: {
					// 输出图片名称
					// [hash:10] hash值取前10位
					filename: "static/images/[hash:10][ext][query]",
				},
			},
			{
				test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
				type: "asset/resource", // 原封不动的输出
				generator: {
					// 输出名称
					// [hash:10] hash值取前10位
					filename: "static/media/[hash:10][ext][query]",
				},
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/, // 排除node_modules中的js文件(这些文件不处理)
				use: {
					loader: "babel-loader",
					// options: {
					// 	presets: ["@babel/preset-env"], // 智能预设
					// },
				},
			},
		],
	},
	// 插件
	plugins: [
		// plugin的配置
		new ESLintPlugin({
			// 检测哪些文件
			context: path.resolve(__dirname, "../src"),
		}),
		// 模板：以public/index.html文件创建新的html文件
		// 新的html文件特点：1.结构和原来一致 2.自动引入打包输出的资源
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
	],
	// 开发服务器：不会输出资源，在内存中编译打包的
	devServer: {
		host: "localhost", //启动服务器域名
		port: "3000", // 启动服务器端口号
		open: true, // 是否打开浏览器
	},
	mode: "development",
	// 模式
};