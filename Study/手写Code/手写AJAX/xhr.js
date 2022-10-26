const xhr = new XMLHttpRequest();
xhr.open("GET", "./data/test.json", false);
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		// 0 UNSET 还未调用open
		// 1 OPENED open 方法已被调用
		// 2 HEADERS_RECEIVED send 方法已被调用, header已被接收
		// 3 LOADING 下载, responseText 已有部分内容
		// 4 DONE 下载完成
		if (xhr.status === 200) {
			// alert(xhr.responseText);
			console.log(JSON.parse(xhr.responseText));
		} else {
			console.log("其他情况");
		}
	}
};
xhr.send(null);
