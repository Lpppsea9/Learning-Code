import count from "./js/count";
import sum from "./js/sum";
// 要想webpack打包资源，必须引入资源
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./stylus/index.styl";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));

/* 
  entry 入口
  output 输出
  loader 加载器
  plugins 插件
  mode 模式
*/
