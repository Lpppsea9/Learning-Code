var p = new Promise((res, rej) => {
	res("a");
	console.log("b");
});

function hello() {
	console.log("c"); //1
	return p;
}

hello()
	.then((res) => {
		//微1
		console.log(res);
		console.log("d");
		return "e";
	})
	.then((res) => {
		//微3
		console.log(res);
		console.log("f");
		return "g";
	})
	.then((res) => {
		// 微5
		console.log(res);
		console.log("h");
	});

function test1() {
	console.log("i");
}

async function asy() {
	console.log("j"); //2
	await console.log("k"); //3

	console.log("l"); //微2
	await console.log("m");

	console.log("n"); //微4
}

asy();

test1(); // 4
