class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	append(item) {
		let node = new Node(item);
		if (this.head === null) {
			this.head = node;
		} else {
			let current = this.getNode(this.length - 1);
			current.next = node;
		}
		this.length++;
	}

	appendAt(index, item) {
		if (index < 0 || index > this.length) {
			throw new Error("position range");
		}
		let node = new Node(item);

		if (index === 0) {
			node.next = this.head;
			this.head = node;
		} else {
			let preItem = this.getNode(index - 1);
			node.next = preItem.next;
			preItem.next = node;
		}
		this.length++;
	}

	deleteAt(index) {
		if (index < 0 || index >= this.length) {
			throw new Error("out range");
		}
		let current = this.head;
		if (index === 0) {
			this.head = current.next;
		} else {
			let pre = this.getNode(index - 1);
			current = pre.next;
			pre.next = current.next;
		}
		this.size--;
	}

	indexOf(item) {
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			if (current.element === item) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	getNode(index) {
		if (index < 0 || index >= this.length) {
			throw new Error("out range");
		}
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}
}

let a = new LinkedList();
a.append(1);
a.append(2);
a.appendAt(2, 3);
console.log(a.indexOf(3));

console.dir(a, {
	depth: 100,
});
