const os = require("os");
const path = require("path"); // nodejs核心模块, 专门用来处理路径问题
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const webpackCommonConf = require("./webpack.common");
const { merge } = require("webpack-merge");
const { webpack } = require("webpack");

const threads = os.cpus().length; //cpu核数

module.exports = merge(webpackCommonConf, {
	mode: "production",
	// 入口
	// entry: "./src/main.js", // 相对路径
	// 输出
	output: {
		// 所有文件的输出路径
		// __distname nodejs的变量, 代表当前文件的文件夹目录
		path: path.resolve(__dirname, "../dist"), // 绝对路径
		// 入口文件打包输出文件名
		// filename: "static/js/[name].[contenthash:8].js",
		// 给打包输出的其他文件命名
		chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
		// 图片、字体等通过type: asset处理资源命名方式
		assetModuleFilename: "static/media/[hash:10][ext][query]",
		// 自动清空上次打包的内容
		// 原理：在打包前，将path整个目录内容清空，再进行打包
		clean: true,
	},
	// 加载器
	module: {
		rules: [
			// loader的配置
			{
				oneOf: [
					{
						test: /\.css$/, // 只检测.css文件
						use: [
							//执行顺序，从右到左 （从下到上）
							// "style-loader", // 将js中css通过创建style标签添加html文件中生效
							MiniCssExtractPlugin.loader, //提取css成单独文件
							"css-loader", // 将css资源编译成commonjs模块到js中
						],
					},
					{
						test: /\.less$/,
						// loader: 'xxx', // 只能使用1个loader
						use: [
							// 使用多个loader
							MiniCssExtractPlugin.loader,
							"css-loader",
							"less-loader", // 将less编译成css文件
						],
					},
					{
						test: /\.s[ac]ss$/,
						use: [
							MiniCssExtractPlugin.loader,
							"css-loader",
							"sass-loader", // 将sass编译成css文件
						],
					},
					{
						test: /\.styl$/,
						use: [
							MiniCssExtractPlugin.loader,
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
						// generator: {
						// 	// 输出图片名称
						// 	// [hash:10] hash值取前10位
						// 	filename: "static/images/[hash:10][ext][query]",
						// },
					},
					{
						test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
						type: "asset/resource", // 原封不动的输出
						// generator: {
						// 	// 输出名称
						// 	// [hash:10] hash值取前10位
						// 	filename: "static/media/[hash:10][ext][query]",
						// },
					},
					{
						test: /\.m?js$/,
						// exclude: /node_modules/, // 排除node_modules中的js文件(这些文件不处理)
						include: path.resolve(__dirname, "../src"), //只处理src下的文件, 其他文件不处理
						use: [
							// {
							// 	loader: "thread-loader", //开启多进程
							// 	options: {
							// 		workers: threads,
							// 	},
							// },
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
		],
	},
	// 插件
	plugins: [
		// plugin的配置
		new ESLintPlugin({
			// 检测哪些文件
			context: path.resolve(__dirname, "../src"),
			exclude: "node_modules", //默认值
			cache: true, // 开启缓存
			cacheLocation: path.resolve(
				__dirname,
				"../node_modules/.cache/eslintcache"
			),
			threads, //开启多进程和设置进程数量
		}),
		// 模板：以public/index.html文件创建新的html文件
		// 新的html文件特点：1.结构和原来一致 2.自动引入打包输出的资源
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
			filename: "index.html",
			// chunks 表示该页面需要引用哪些 chunk
			chunks: ["main", "vendor", "common"], //要考虑代码分割
		}),
		// 多入口需要两个
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/other.html"),
			filename: "other.html",
			chunks: ["other", "common"], //要考虑代码分割
		}),

		// 抽离 css 文件
		new MiniCssExtractPlugin({
			filename: "static/css/[name].[contenthash:10].css",
			chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
		}),

		new PreloadWebpackPlugin({
			// rel: "preload",
			// as: "script",
			rel: "prefetch",
		}),
	],
	optimization: {
		// 压缩的操作
		minimizer: [
			// 压缩css
			new CssMinimizerPlugin(),
			// 压缩js
			new TerserWebpackPlugin({
				// parallel: threads,
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminGenerate,
					options: {
						plugins: [
							["gifsicle", { interlaced: true }],
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
							[
								"svgo",
								{
									plugins: [
										"preset-default",
										"prefixIds",
										{
											name: "sortAttrs",
											params: {
												xmlnsOrder: "alphabetical",
											},
										},
									],
								},
							],
						],
					},
				},
			}),

			new webpack.IgnorePlugin({}),
		],

		// 代码分割配置
		splitChunks: {
			chunks: "all",
			/* 
        initial 入口 chunk，对于异步导入的文件不处理
        async 异步 chunk，只对异步导入的文处理
        all 全部 chunk
      */

			// 缓存分组
			cacheGroups: {
				// 第三方模块
				vendor: {
					name: "vendor", // chunk 名称
					priority: 1, // 权限更高，优先抽离， 重要！
					test: /node_modules/,
					minSize: 0, //大小限制
					minChunks: 1, //最少复用过几次
				},

				// 公共的模块
				common: {
					name: "common", //chunk 名称
					priority: 0,
					minSize: 0, //大小限制
					minChunks: 1, //最少复用过几次
				},
			},
		},

		runtimeChunk: {
			name: (entrypoint) => `runtime${entrypoint.name}.js`,
		},
	},

	devtool: "source-map",
});
