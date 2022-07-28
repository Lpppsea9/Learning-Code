const person = {
	name: "Lppp",
	age: 24,
};

const myF = {
	name: "zzy",
	age: 18,
};

function test(a, b, c) {
	console.log(
		`this值: ${this} | name: ${this.name} | age: ${this.age} | a: ${a} | b: ${b}`
	);
	console.log(this);
}

// test.call(person);
// test.apply(person, ["lll", "sss", "ppp"]);
// test.myApply(person, ["lll", "sss", "ppp"]);
Function.prototype.myCall = function (thisArg, ...args) {
	const func = this;
	if (thisArg === undefined || thisArg === null) {
		return func(...args);
	}

	const tempFunc = Symbol("Temp Func");
	thisArg[tempFunc] = func;
	const result = thisArg[tempFunc](...args);

	Reflect.deleteProperty(thisArg, tempFunc);
	return result;
};

Function.prototype.myApply = function (thisArg, args) {
	const func = this;
	if (thisArg === undefined || thisArg === null) {
		return func(args);
	}
	const tempFunc = Symbol("Temp Func");
	thisArg[tempFunc] = func;

	const result = thisArg[tempFunc](...args);
};

const a = 1;
function funcA() {
	console.log(this.a);
}

funcA();
