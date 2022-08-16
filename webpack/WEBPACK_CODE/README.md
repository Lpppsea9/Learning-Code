# webpack4 demo

升级 webpack5 以及周边插件后，代码需要做出的调整

- package.json 的 dev-server 命令改了 `"dev": "webpack serve --config ./config/webpack.dev.js"`
- 升级新版本 `const { merge } = require{'webpack-merge'}`
- 升级新版本 `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`
- `module.rules` 中 `loader: ['xxx-loader']` 换成 `use: ['xxx-loader']`
- `filename: 'bundle.[contenthash:8].js` 其中 `h` 小写，不能大写
