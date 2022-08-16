/*  */
function reactive(target = {}) {
	if (typeof target !== "object" || target == null) {
		// 不是对象或者数组 返回
		return target;
	}

	// 代理配置
	const proxyConf = {
		get(target, key, receiver) {
			const ownKeys = Reflect.ownKeys(target);
			if (ownKeys.includes(key)) {
				console.log("get", key);
			}
			const result = Reflect.get(target, key, receiver);

			// 什么时候get 什么时候递归
			return reactive(result); // 返回结果
		},

		set(target, key, val, receiver) {
			if (val === target[key]) {
				return true;
			}

			const result = Reflect.set(target, key, val, receiver);
			console.log("set", key, val);
			console.log("result", result);
			return result; //是否设置成功
		},

		deleteProperty(target, key) {
			const result = Reflect.deleteProperty(target, key);
			console.log("delete property", key);
			console.log("result", result);
			return result; //是否删除成功
		},
	};

	const observed = new Proxy(target, proxyConf);

	return observed;
}

// 测试数据
const data = {
	name: "张三",
	age: 20,
	info: {
		city: "shanghai",
		a: {
			b: {
				c: {
					d: {
						e: 100,
					},
				},
			},
		},
	},
};

const proxyData = reactive(data);
