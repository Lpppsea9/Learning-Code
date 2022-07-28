// 链表; JS的实现方式

// 1.单向链表：线性的数据结构
// 2.双向链表：pre指针
// 3.单向循环链表
// 4.双向循环链表
// 5.环形链表
/* 链表能够指向不连续的空间 */

// 单向链表
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null; //空
		this.size = 0; //长度
	}

	append(element) {
		let node = new Node(element);
		if (this.head === null) {
			this.head = node;
		} else {
			let current = this.getNode(this.size - 1);
			current.next = node;
		}
		this.size++;
	}

	// 在指定位置追加
	appendAt(position, element) {
		if (position < 0 || position > this.size) {
			throw new Error("position out range");
		}
		let node = new Node(element);

		if (position === 0) {
			node.next = this.head;
			this.head = node;
		} else {
			// 追加节点的前一个节点
			let pre = this.getNode(position - 1);
			node.next = pre.next; /* !防止指针丢失 */
			pre.next = node;
		}
		this.size++;
	}

	// 指定位置删除
	removeAt(position) {
		if (position < 0 || position >= this.size) {
			throw new Error("position out range");
		}

		let current = this.head;
		if (position === 0) {
			this.head = current.next;
		} else {
			let pre = this.getNode(position - 1);
			current = pre.next;
			pre.next = current.next;
		}

		this.size--;
	}

	// 查找指定元素的索引
	indexOf(element) {
		let current = this.head;
		for (var i = 0; i < this.size; i++) {
			if (current.element === element) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	getNode(index) {
		if (index < 0 || index >= this.size) {
			throw new Error("out range");
		}
		let current = this.head;
		for (var i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
// ll.append(3);
// ll.append(4);
ll.appendAt(2, 3);
ll.appendAt(3, 4);
// ll.appendAt(3, 2);

// ll.removeAt(0);
// ll.removeAt(1);
console.log(ll.indexOf(1));
console.log(ll.indexOf(2));
console.log(ll.indexOf(3));
console.log(ll.indexOf(4));

console.dir(ll, {
	depth: 100,
});
