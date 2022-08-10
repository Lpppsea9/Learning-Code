function addEvent(em, type, fn) {
	em.addEventListener(type, fn);
}

const body = document.body;
addEvent(body, "click", function () {
	console.log("取消");
});

const p1 = document.getElementById("p1");
addEvent(p1, "click", (event) => {
	// event.stopPropagation()
	event.preventDefault(); //阻止默认行为
	console.log("激活");
});
