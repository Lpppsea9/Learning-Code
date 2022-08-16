Function.prototype.myCall = function (context) {
	if (typeof this !== "function") {
		throw new Error();
	}
	const args = [...arguments].slice(1);
	const key = Symbol("key");
	context[key] = this;
	let res = context[key](...args);
	delete context[key];
	return res;
};

Function.prototype.myApply = function (context) {
	const args = [...arguments].slice(1);
	const key = Symbol();
	context[key] = this;
	let result = context[key](args);
	delete context[key];

	return result;
};
