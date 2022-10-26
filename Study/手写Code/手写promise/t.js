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
				this.rejectCallbacks.forEach((fn) => fn(this.reason));
			}
		};

		try {
			fn(resolveHandler, rejectHandler);
		} catch (err) {
			rejectHandler(err);
		}
	}

	then(fn1, fn2) {
		fn1 = typeof fn1 === "function" ? fn1 : (v) => v;
		fn2 = typeof fn2 === "function" ? fn2 : (e) => e;

		if (this.state === "pending") {
			return myPromise((resolve, reject) => {
				this.resolveCallbacks.push(() => {
					try {
						const newValue = fn1(this.value);
						resolve(newValue);
					} catch (err) {
						reject(err);
					}
				});

				this.rejectCallbacks.push(() => {
					try {
						const newReason = fn2(this.reason);
						reject(newReason);
					} catch (err) {
						reject(err);
					}
				});
			});
		}

		if (this.state === "fulfilled") {
			return myPromise((resolve, reject) => {
				try {
					const newValue = fn1(this.value);
					resolve(newValue);
				} catch (err) {
					reject(err);
				}
			});
		}

		if (this.state === "pending") {
			return myPromise((resolve, reject) => {
				try {
					const newReason = fn2(this.value);
					reject(newReason);
				} catch (err) {
					reject(err);
				}
			});
		}
	}
}
