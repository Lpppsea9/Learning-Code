// Function.prototype.myBind = function (context) {
// 	if (typeof this !== "function") {
// 		throw new Error("Type Error");
// 	}
// 	const args = [...arguments].slice(1); //这里的args是指绑定时传的参数
// 	const fn = this;
// 	console.log("this1", this);
// 	return function Fn() {
// 		console.log("this2", this);
// 		return fn.apply(this instanceof Fn ? this : context, [
// 			...args,
// 			...arguments,
// 		]);
// 	};
// };

// let foo = function () {
// 	this.content = "hello";
// };

// let boo = foo.myBind({ content: "bye" });
// let res = new boo();
// console.log(res); // {content:"hello"}
// function myNew(fn, ...args) {
// 	let instance = Object.create(fn.prototype);
// 	let res = fn.apply(instance, args); // 改变this指向

// 	// 确保返回的是一个对象(万一fn不是构造函数)
// 	return typeof res === "object" ? res : instance;
// }

function myNew(context) {
	const obj = new Object();
	obj.__proto__ = context.prototype;
	const res = context.apply(obj, [...arguments].slice(1));
	return typeof res === "object" ? res : obj;
}

function obj() {
	this.name = "lppp";
}
// let b = new obj();
let b = Object.create(obj);
console.log(b.__proto__ === obj);
