class Vue {
	constructor(options) {
		this.$el = document.querySelector(options.dom);
		this.$data = options.data;

		//proxy : 就是把data中的数据, 赋值给new Vue这个实例对象
		this.proxy();

		//把data中的数据 解析到view, 让模板解析成数据
		this.compile(this.$el);
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
	compile(node) {
		// 如果节点类型== 3
		node.childNodes.forEach((item, index) => {
			console.log(item.nodeType);
		});
	}
}
