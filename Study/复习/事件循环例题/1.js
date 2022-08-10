new Promise((resolve, reject) => {
	console.log("n999");
	resolve();
})
	//微1-1
	.then(() => {
		console.log("zqqq");
		new Promise((resolve, reject) => {
			console.log("ouou");
			setTimeout(() => {
				reject();
			}, 3 * 1000);
			resolve();
		})
			.then(() => {
				console.log("jwei");
				new Promise((resolve, reject) => {
					console.log("bean");
					resolve();
				})
					.then(() => {
						console.log("xiao");
					})
					.then(() => {
						console.log("xql");
					});
			})
			.then(() => {
				console.log("baby");
			});
	})
	.then(() => {
		console.log("jackylove");
	});
/* 
n999
zqqq
ouou
jackylove
jwei
bean
baby
xiao
xql
*/
