// class Student {
// 	constructor(name, number) {
// 		this.name = name;
// 		this.number = number;
// 	}
// 	sayHi() {
// 		console.log(`${this.name}--${this.number}`);
// 	}
// }

// // const xialuo = new Student("夏洛", 89);

// class www extends Student {
// 	constructor(name, age) {
// 		super(name);
// 	}
// }

// console.log(typeof www);
// // const a = new www("ppp");
// console.log(www.prototype.__proto__ === Student.prototype);
// console.log(www.__proto__ === Student);
// console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

// let i, a;

// for (let i = 0; i < 10; i++) {
// 	a = document.createElement("a");
// 	a.innerHTML = i + "<br>";
// 	a.addEventListener("click", function (e) {
// 		e.preventDefault();

// 		alert(i);
// 	});

// 	document.body.appendChild(a);

/* 闭包 */
// 函数作为返回值
// function create() {
// 	let a = 100;
// 	console.log("ll");
// 	return function () {
// 		console.log(a);
// 	};
// }

// let fn = create();
// fn();

// 函数作为参数
// function pr(fn) {
// 	let a = 100;
// 	fn();
// }

// let a = 200;
// function fn() {
// 	console.log(a);
// }

// pr(fn);

// 所有自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！

// this取什么样的值，是在函数执行时决定的

/* 手写bind */
// function fn1(a, b, c) {
// 	console.log("this", this);
// 	console.log(a, b, c);
// 	return "this is fn1";
// }

// const fn2 = fn1.bind({ x: 100 }, 10, 20, 30);
// const res = fn2();
// console.log(res);

function myPower(x, n) {
	if (n === 0 || n === 1) {
		return n === 0 ? 1 : x;
	}

	if (n < 0) {
	}
	debugger;
	return n % 2 === 1 ? x * myPower(x, n - 1) : myPower(x * x, n / 2);
}

console.log(myPower(2, 3));
