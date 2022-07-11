// 创建函数的几种方式
// 函数表达式
function sumFunc(a, b) {
	return a + b;
}

// 函数声明
let sumNameFunc = function (a, b) {
	return a + b;
};

// 箭头函数
let sumArrowFunc = (a, b) => {
	return a + b;
};

// 构造函数(不推荐)
let sumFunctionFunc = new Function("a", "b", "return a - b");

// console.log(sumFunctionFunc(2, 5));

/* 把函数想象为对象, 把函数名想象为指针是很重要的 */

/*  
  任何使用函数表达式的地方, 都可以使用箭头函数 
  箭头函数简洁的语法非常适合嵌入函数的场景;
  如果只有一个参数, 那也可以不用括号。只有没有参数, 或者多个参数的情况下, 才需要使用括号;
*/

/* 
箭头函数大括号
  箭头函数也可以不用大括号, 但是这样会改变函数的行为。 
  使用大括号, 说明包含"函数体", 可以在一个函数中包含多条语句, 跟常规的函数一样;
  不适用大括号, 那么箭头后面只能有一行代码, 比如一个赋值操作, 或者一个表达式;
  而且, 省略大括号会隐式返回这行代码的值
*/

let trimply = (x) => 3 * x;

/* 
箭头函数缺点
  箭头函数虽然语法简洁, 但也有很多场合不适用。
  箭头函数不能使用 arguments、super、new.target,也不能用作构造函数。
  箭头函数没有 prototype 属性

*/

let funcPro = function () {
	console.log(arguments);
};

let arrowPro = () => {
	console.log(arguments);
};
// console.log(arrowPro.prototype);

//2. 函数名
/* 
  ES6的所有函数对象都会暴露出一个只读的 name 属性, 其中包含关于函数的信息。
  多数情况下, 这个属性中保存的就是一个函数标识符, 或者说是一个字符串化的变量名。
  即使函数没有名称, 也会如实的显示成空字符串。
  如果它是使用 Function 构造函数创建的, 则会标识成 "anonymous"
*/
function func() {}

// console.log(func.name);           // func
// console.log(funcPro.name);        // funcPro
// console.log(arrowPro.name);       // arrowPro
// console.log((() => {}).name);     // (空字符串)
// console.log((new Function).name); // anonymous

//3. 参数
/* 
  arguments是一个类数组
  箭头函数的参数是不能通过 arguments 关键字访问的, 而只能通过定义的命名参数访问。
*/
