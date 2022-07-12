import count from "./js/count";
import sum from "./js/sum";
// 要想webpack打包资源，必须引入资源
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./stylus/index.styl";

const result = count(9, 1);
console.log(result);
console.log(sum(1, 2, 3, 4));

if (module.hot) {
	// 判断是否支持热模块更新
	module.hot.accept("./js/count");
	module.hot.accept("./js/sum");
}

/* 
  entry 入口
  output 输出
  loader 加载器
  plugins 插件
  mode 模式
*/
