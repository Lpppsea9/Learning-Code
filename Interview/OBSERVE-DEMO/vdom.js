const vnode = {
	tag: "div",
	props: {
		className: "container",
		id: "div1",
	},
	children: [
		{
			tag: "p",
			children: "vdom",
		},
		{
			tag: "ul",
			props: { style: "font-size: 20px" },
			children: [
				{
					tag: "li",
					children: "a",
				},
			],
		},
	],
};

/* 
#snabbdom重点总结
  h函数
  vnode数据结构
  patch函数


#vdom总结
  用js模拟dom结构
  新旧vnode对比,得出最小的更新范围，最后更新DOM
  数据驱动视图的模式下，有效控制DOM操作

*/
