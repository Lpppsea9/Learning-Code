let a = {
	name: "lppp",
	eat: ["eggs", "apples"],
};
Object.prototype.game = "dead by daylight";

const b = deepClone(a);
b.name = "lkkk";

console.log(b.game);

function deepClone(obj = {}) {
	if (typeof obj !== "object" obj == null) {
		return obj;
	}

	let result;
	if (result instanceof Array) {
		result = [];
	} else {
		result = {};
	}

	for (let key in obj) {
		// if (obj.hasOwnProperty(key)) {
		result[key] = deepClone(obj[key]);
		// }
	}
	return result;
}
