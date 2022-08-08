class myPromise {
	state = "pending";
	value = undefined;
	reason = undefined;

	resolveCallbacks = [];
	rejectCallbacks = [];

	constructor(fn) {
		const resolveHandler = (value) => {
			if (this.state === "pending") {
				this.state = "fulfilled";
				this.value = value;
				this.resolveCallbacks.forEach((fn) => fn(this.value));
			}
		};

		const rejectHandler = (reason) => {
			if (this.state === "pending") {
				this.state = "rejected";
				this.reason = reason;
				this.resolveCallbacks.forEach((fn) => fn(this.value));
			}
		};

		try {
			fn(resolveHandler, rejectHandler);
		} catch (err) {
			rejectHandler(err);
		}
	}

	then(fn1, fn2) {
		/* 在pending状态下 要存储没执行的reslove的函数和reject函数 */
	}
}
