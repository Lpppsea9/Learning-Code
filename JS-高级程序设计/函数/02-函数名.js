function sum(num1, num2) {
	return num1 + num2;
}

// console.log(sum(10, 10));
let anotherSum = sum;
sum = null;
// console.log(anotherSum(2, 1));
// console.log(anotherSum.name);
/* 
  以上代码定义了一个名为 sum()的函数，用于求两个数之和。然后又声明了一个变量 anotherSum，并将它的值设置为等于 sum。
注意，使用不带括号的函数名会访问函数指针，而不会执行函数。
此时，anotherSum 和 sum 都指向同一个函数。调用 anotherSum()也可以返回结果。
把 sum 设置为 null 之后，就切断了它与函数之间的关联。而 anotherSum()还是可以照常调用，没有问题。
ECMAScript 6 的所有函数对象都会暴露一个只读的 name 属性，其中包含关于函数的信息。多数情
况下，这个属性中保存的就是一个函数标识符，或者说是一个字符串化的变量名。即使函数没有名称，
也会如实显示成空字符串。如果它是使用 Function 构造函数创建的，则会标识成"anonymous"：
*/

function foo() {}
console.log(foo.bind(null).name);

let dog = {
	name: "lppp",
	years: 2021,
	get age() {
		return this.years;
	},
	set age(newAge) {
		this.years = newAge;
	},
};
const b = Object.getOwnPropertyDescriptor(dog, "age");
console.log(b.get.name);
console.log(b.set.name);

// 总结: 如果函数是一个获取函数、设置函数, 或者使用bind()实例化, 那么标识符前面会加上一个前缀:
