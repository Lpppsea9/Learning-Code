// 全部引入? 按需引入配置 babelrc
// import("@babel/polyfill");
const sum = (a, b) => a + b;
// function* ss() {
// 	yield;
// }

/* 
polyfill 对浏览器的js做一个补丁，兼容, 绑原型
corejs 和 regenerator (function* yield)
babel-polyfill 是corejs 和 regenerator 的集合
*/

// 新的 API
Promise.resolve(100)
	.then((data) => data)

	[(10, 20, 30)].includes(20);

// 语法，符合 ES5 语法规范
// 不处理模块化(webpack)

/* 
polyfill会做这样的事情 做一个兼容
  window.Promise = function () {};
  Array.prototype.includes = function () {};
babel-polyfill的问题
  会污染全局环境
*/
/* 
babel-runtime
  不会污染全局环境
*/
