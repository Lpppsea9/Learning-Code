let data1 = {
	name: "顿顿渡渡",
	user: {
		name: "hdcms",
		address: ["shanghai"],
	},
	arr: [],
};

const data2 = deepClone(data1);
data2.user.name = "liupneg";
console.log(data1.user.name);

function deepClone(obj) {
	if (typeof obj !== "object" || typeof obj == null) {
		return obj;
	}
	let result;
	//判断 result的 类型
	if (typeof result == Array) {
		result = [];
	} else {
		result = {};
	}
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepClone(obj[key]);
		}
	}
	return result;
}
