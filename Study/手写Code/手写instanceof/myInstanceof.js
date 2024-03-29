function myInstanceof(target, origin) {
	if (typeof target !== "object" || target === null) return false;
	if (typeof origin !== "function")
		throw new TypeError("origin must be function");
	let proto = Object.getPrototypeOf(target); // 相当于 proto = target.__proto__;
	while (proto) {
		if (proto === origin.prototype) return true;
		proto = Object.getPrototypeOf(proto);
	}
	return false;
}

function myIns(target, origin) {
	if (typeof target !== "object" || typeof target === null) return false;
	if (typeof origin !== "function") {
		throw new TypeError("origin muast be a function");
	}
	let proto = Object.getPrototypeOf(target);
	while (proto) {
		if (proto === origin.prototype) return true;
		proto = Object.getPrototypeOf();
	}
}

const a = function () {};
class c {
	constructor() {}
}
const b = new a();
console.log(typeof c);
// console.log(myInstanceof1(a, b));
