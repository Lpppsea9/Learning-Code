const p = new Promise((resolve, reject) => {
	reject(1);
});
console.log(
	p.then(
		() => {
			console.log("1");
		},
		() => {
			console.log("2");
		}
	)
);
