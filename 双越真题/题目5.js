// 如何阻止事件冒泡和默认行为？
// 查找、添加、删除、移动DOM结点的方法？
// 如减少 DOM 操作？

// 1.
    // event.stopPropagation() 阻止事件冒泡
    // event.preventDefault(); 阻止默认行为


//2.
    document.getElementById()
    document.getElementsByTagName()
    document.getElementsByClassName()
    document.querySelectorAll()

    //新建节点
    document.createElement()
    //插入节点
    document.appendChild()
    //移动节点
    document.appendChild() //注意两个api虽然是一样但是有区别

    //获取父元素
    console.log(p1.parentNode);

    //获取子元素列表
    children
    childNodes

    //删除子元素
    removeChild


//3.
/*
    缓存DOM查询结果(长度length先缓存)
    多次DOM操作，合并到一次插入
         (插入li，先建一个文档片段，先把li遍历插入到文档片段(createDocumentFragment)里,再统一插入(appendChlid)到DOM结构中)

*/