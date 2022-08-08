const ar = [1, [2, [3, [4, 5]]], 6];
const flatten = (arr) => {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
	}, []);
};

console.log(flatten(ar));
