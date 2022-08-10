function bubbleSort(arr) {
	const len = arr.length;
	if (len === 0) {
		return;
	}
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

let a = [5, 121, 3, 434, 67, 12];

console.log(bubbleSort(a));
