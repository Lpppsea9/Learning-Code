class Vue {
	constructor(options) {
		this.$el = document.querySelector(options.el);
		this.$data = options.data();

		// 这里放入订阅者(就是观察者)
		this.$watchClient = {};

		// 把data中的数据，赋值给Vue这个实例对象
		this.proxy();

		// 把data中的数据解析到view层，让模板解析成数据
		this.compile(this.$el);

		//
		this.observer();
	}

	proxy() {
		for (let key in this.$data) {
			Object.defineProperty(this, key, {
				get() {
					return this.$data[key];
				},
				set() {},
			});
		}
	}

	observer() {
		for (let key in this.$data) {
			let value = this.$data[key];
			let self = this;
			console.log(this);
			Object.defineProperty(this.$data, key, {
				get() {
					return value;
				},
				set(val) {
					value = val;
					console.log(self);
					if (self.$watchClient[key]) {
						self.$watchClient[key].forEach((item) => {
							item.update();
						});
					}
				},
			});
		}
	}

	compile(node) {
		node.childNodes.forEach((item) => {
			if (item.nodeType === 1) {
				if (item.hasAttribute("v-model")) {
					let vmKey = item.getAttribute("v-model").trim();
					item.value = this.$data[vmKey];

					item.addEventListener("input", () => {
						this.$data[vmKey] = item.value;
					});
				}

				this.compile(item);
			}

			// 下面更新视图
			if (item.nodeType === 3) {
				let reg = /\{\{(.*?)\}\}/;
				let text = item.textContent;
				item.textContent = text.replace(reg, (match, vmKey) => {
					vmKey = vmKey.trim();

					// 绑定更新函数
					let watcher = new Watcher(this, vmKey, item, "textContent");
					if (this.$watchClient[vmKey]) {
						this.$watchClient[vmKey].push(watcher);
					} else {
						this.$watchClient[vmKey] = [];
						this.$watchClient[vmKey].push(watcher);
					}

					return this.$data[vmKey];
				});
			}
		});
	}
}

class Watcher {
	constructor(obj, vmKey, dom, str) {
		this.obj = obj;
		this.vmKey = vmKey;
		this.dom = dom;
		this.str = str;
	}

	update() {
		this.dom[this.str] = this.obj[this.vmKey];
	}
}
