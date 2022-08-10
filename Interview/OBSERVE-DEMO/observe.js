// 触发视图更新
function updateView() {
	console.log("视图更新");
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型
const arrProto = Object.create(oldArrayProperty);
["push", "shift", "pop", "unshift", "splice"].forEach((methodName) => {
	arrProto[methodName] = function () {
		updateView(); // 触发视图更新
		// debugger;
		// console.log(this.__proto__ === Array.prototype);
		oldArrayProperty[methodName].call(this, ...arguments);
	};
});

arrProto.push();
// 重新定义属性
function defineReactive(target, key, value) {
	// 深度监听
	observer(value);
	// 核心 API
	Object.defineProperty(target, key, {
		get() {
			return value;
		},
		set(newVal) {
			// 深度监听
			observer(value);

			if (newVal !== value) {
				// 出发视图更新
				updateView();
			}
		},
	});
}

function observer(target) {
	if (typeof target !== "object" || target === null) {
		// 不是对象或数组
		return target;
	}

	if (Array.isArray(target)) {
		target.__proto__ = arrProto;
	}
	// 重新定义各个属性(for in也可以遍历数组)
	for (let key in target) {
		defineReactive(target, key, target[key]);
	}
}

const data = {
	name: "张山",
	age: 20,
	// info: {
	// 	address: "上海",
	// },
	nums: [10, 20, 30],
};
observer(data);

// data.age = 21;

data.nums.push(80);

// 监听数据
