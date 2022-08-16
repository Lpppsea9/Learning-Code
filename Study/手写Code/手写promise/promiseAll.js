Promise.myAll = function (promiseList = []) {
	return new Promise((resolve, reject) => {
		let result = [];
		let resolvedCount = 0;
		const len = promiseList.length;

		for (let i = 0; i < len; i++) {
			Promise.resolve(promiseList[i])
				.then((data) => {
					result[i] = data;
					resolvedCount++;
					if (resolvedCount === len) {
						resolve(result);
					}
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
};

const p1 = Promise.resolve(100);

const p2 = Promise.resolve(200);

const p3 = Promise.reject("有点脆哦呜");

const p4 = Promise.myAll([p1, p2, p3]);
p4.then((res) => console.log("all res", res)).catch((err) => {
	console.log("ee", err);
});

// for (let i = 0; i < 4; i++) {
// 	console.log(i);
// }
