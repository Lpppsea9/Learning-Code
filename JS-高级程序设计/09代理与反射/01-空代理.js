const target = {
	id: "target",
};

const handler = {};

const proxy = new Proxy(target, handler);

target.id = "lppp";
// console.log(Proxy.prototype);
// console.log(Object.prototype);
// console.log(proxy.hasOwnProperty("id"));

// console.log(target instanceof Proxy);
// 因为Proxy的prototype是undefined
// 所以不能使用操作符instanceOf
// console.log(proxy instanceof Proxy);
