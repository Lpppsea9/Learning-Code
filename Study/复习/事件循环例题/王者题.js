Promise.resolve()
	.then(() => {
		// 微1-1
		console.log("promise1");
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// 宏3
				console.log("timer2");
				resolve(); // TODO 因为是在异步确认Promise的状态,
				// TODO 所以当状态还没有确定之前下面的then中的回调都不会注册当异步任务中
			}, 0);
		})
			.then(async () => {
				// 微3-1
				console.log(await foo()); // TODO 注: 对于await解释下面第四天题的分析很透彻了,不
				return new Error("error1"); // 微4-1
			})
			.then(
				(ret) => {
					// 微4-2
					setTimeout(() => {
						// 宏5
						console.log(ret);
						Promise.resolve()
							.then(() => {
								// 微5-1
								return new Error("error!!!");
							})
							.then((res) => {
								// 微5-2
								console.log("then: ", res);
							})
							.catch((err) => {
								console.log("catch: ", err);
							});
					}, 1 * 3000);
				},
				(err) => {
					console.log(err);
				}
			)
			.finally((res) => {
				// 微3-2 前面状态不确定,但是finally不管状态如何都执行且不接受任务参数
				console.log(res, "lll");
				throw new Error("error2");
			})
			.then(
				(res) => {
					// 微3-3
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
	})
	.then(() => {
		// 微3-4
		console.log("promise2");
	});

async function foo() {
	setTimeout(() => {
		// 宏4
		console.log("async1");
	}, 2 * 1000);
	return Promise.resolve(1);
}

setTimeout(() => {
	// 宏2
	console.log("timer1");
	Promise.resolve().then(() => {
		// 微2-1
		console.log("promise3");
	});
}, 0);

console.log("start");

/**
 * TODO 微1-表示第一次轮询中的微任务
 *
 * 第一次轮询
 * 代码首次加载script作用宏任务执行:
 *  挂载异步任务: 微1-1 宏2
 *  输出: start
 *
 * 宏任务执行完毕: 开始执行微任务列表, 微1-1
 *  挂载异步任务: 宏3
 *  输出: promise1
 *
 *
 *
 * 第二次轮询
 * 首先执行宏任务: 宏2
 * 挂载异步任务: 微2-1
 * 输出: timer1
 *
 * 宏任务执行完毕: 开始执行微任务列表, 微2-1
 * 挂载异步任务: 无
 * 输出: promise3
 *
 *
 *
 *
 * 第三次轮询
 * 首先执行宏任务: 宏3
 * 挂载异步任务: 微3-1 微3-2 微3-3 微3-4
 * 输出: timer2
 *
 * 宏任务执行完毕: 开始执行微任务列表, 微3-1 微3-2 微3-3 微3-4
 * 挂载异步任务: 宏4
 * 输出: undefined error2 promise2
 *
 *
 *
 * 第四次轮询
 * 首先执行宏任务: 宏4
 * 挂载异步任务: 微4-1
 * 输出: async1
 *
 * 宏任务执行完毕: 开始执行微任务列表, 微4-1
 * 挂载异步任务: 微4-2
 * 输出: 没有输出, 现在的回调在没有确定状态都注册过且在轮询中被调用过, 很好的说明了挂在异步时候的是callBack
 *
 *
 * 第五次轮询
 * 首先执行宏任务: 宏5
 * 挂载异步任务: 微4-1
 * 输出: error1 then: error1!!!
 */

// start ->promise1 -> timer1 -> promise3 -> timer2  -> undefined -> error2 ->
// promise2 -> async1 -> error1 -> then: error!!!
