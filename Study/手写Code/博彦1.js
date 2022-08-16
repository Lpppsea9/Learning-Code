// ['a', 'a', 'b', 'b', 'c']
// =>
// { a: false; b: false; c: true}
// 实现
let arr = ["a", "a", "b", "b", "b", "c"];

function dup(arr = []) {
	let obj = {};
	// let arr2 = [...new Set(arr)];
	for (let i = 0; i < arr.length; i++) {
		const key = arr[i];
		if (obj[key] === undefined) {
			obj[key] = 1;
		} else {
			obj[key]++;
		}
	}

	for (let i in obj) {
		if (obj[i] > 1) {
			obj[i] = false;
		} else {
			obj[i] = true;
		}
	}

	return obj;
}
// console.log(new Set(arr));

console.log(dup(arr));
