console.log("script start"); //1

setTimeout(() => {
	console.log("北歌");
}, 1 * 2000); //宏1

Promise.resolve()
	.then(function () {
		console.log("promise1"); //微 1
	})
	.then(function () {
		console.log("promise2");
	});

async function foo() {
	await bar();
	console.log("async1 end"); //微2
}
foo();

async function errorFunc() {
	try {
		await Promise.reject("error!!!");
	} catch (e) {
		console.log(e);
	}
	console.log("async1");
	return Promise.resolve("async1 success");
}
errorFunc().then(
	(res) => console.log(res) //微3
);

function bar() {
	console.log("async2 end");
}

console.log("script end");

/* 




*/
