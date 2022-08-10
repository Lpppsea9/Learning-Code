class Vue {
	constructor(options) {
		this.$el = document.querySelector(options.el);
		this.$data = options.data();

		// 这里放入订阅者(就是观察者)
		this.$watchClient = {};

		// proxy: 就是把data中的数据，赋值给new Vue这个实例对象
		this.proxy();

		// 把data中的数据 解析到view(视图层),让模板解析成数据
		this.compile(this.$el);

		// 劫持并且监听所有属性
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
			console.log(key);
			let value = this.$data[key];
			let that = this;
			Object.defineProperty(this.$data, key, {
				get() {
					return value;
				},
				set(val) {
					value = val;
					console.log(that.$watchClient);
					if (that.$watchClient[key]) {
						that.$watchClient[key].forEach((item, index) => {
							item.update();
						});
					}
				},
			});
		}
	}

	/* 
  1.解析模板，初始化，更新view层
  2.watcher????
  */
	compile(node) {
		node.childNodes.forEach((item, index) => {
			// 如果节点类型==1，证明是元素节点
			if (item.nodeType === 1) {
				if (item.hasAttribute("v-model")) {
					let vmKey = item.getAttribute("v-model").trim();
					item.value = this.$data[vmKey];
					item.addEventListener("input", (e) => {
						// model层，数据变了，不代表view层就会变，因为要update
						this.$data[vmKey] = item.value;
						console.log(this);
					});
				}

				this.compile(item);
			}

			// 如果节点类型==3，证明是文本节点
			// 下面才是更新视图的
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
					// console.log(this.$watchClient);

					return this.$data[vmKey];
				});
			}
		});
	}
}

//
class Watcher {
	constructor(obj, vmKey, dom, str) {
		// obj:是new Vue这个大对象
		// vmKey，就是视图中{{}}这些内容
		// dom：就是文本节点，最后更新的也是他
		// str：字符串，为死的textContent
		this.obj = obj;
		this.vmKey = vmKey;
		this.dom = dom;
		this.str = str;
	}
	// Watcher 更新 view 视图层
	update() {
		this.dom[this.str] = this.obj[this.vmKey];
	}
}
