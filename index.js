class LinkedList {
	#length = 1;
	constructor(value) {
		const newNode = createNode(value);
		this.head = newNode;
		this.tail = newNode;
	}
	append(value) {
		const newNode = createNode(value);
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;

		// Update Length
		this.#length++;
	}
	prepend(value) {
		const newNode = createNode(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;

		// Update Length
		this.#length++;
	}
	at(index) {
		let current = this.head;
		let i = 0;
		while (current) {
			if (i === index) {
				return current;
			}
			i++;
			current = current.next;
		}
		console.log("Not Found");
		return null;
	}
	pop() {
		this.tail = this.tail.prev;
		this.tail.next = null;
		this.#length--;
	}
	contains(value) {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}
	find(value) {
		let current = this.head;
		let i = 0;
		while (current) {
			if (current.value === value) {
				return i;
			}
			i++;
			current = current.next;
		}
		return null;
	}
	insertAt(value, index) {
		const newNode = createNode(value);
		const node = this.at(index);
		if (node) {
			newNode.prev = node.prev;
			newNode.next = node;
			node.prev.next = newNode;
			node.prev = newNode;
			this.#length++;
		}
	}
	removeAt(index) {
		const node = this.at(index);
		if (node) {
			node.prev.next = node.next;
			node.next.prev = node.prev;
			node.next = null;
			node.prev = null;
			this.#length--;
		}
	}
	toString() {
		let current = this.head;
		let nodesValues = [];
		while (current) {
			nodesValues.push(current.value);
			current = current.next;
		}
		// console.log(`( ${nodesValues.join(" ) -> ( ")} ) -> null`);
		return `( ${nodesValues.join(" ) -> ( ")} ) -> null`;
	}
	get size() {
		return this.#length;
	}
}

const linkedList = new LinkedList(5);

console.log(`initial list: ${linkedList.toString()}
size: ${linkedList.size}`);

console.log(`
-------------------------------------------------------
`);
linkedList.append(4);
console.log(`append: ${linkedList.toString()}
size: ${linkedList.size}`);

console.log(`
-------------------------------------------------------
`);
linkedList.prepend(3);
console.log(`prepend: ${linkedList.toString()}
size: ${linkedList.size}`);

console.log(`
-------------------------------------------------------
`);

console.log(`Node value at index 1 is ${linkedList.at(1).value}`);

console.log(`
-------------------------------------------------------
`);

console.log(`Is list contains a node of value 3 ? ${linkedList.contains(3)}`);

console.log(`
-------------------------------------------------------
`);

console.log(`What is the index of the node of value 5 ? ${linkedList.find(5)}`);

console.log(`
-------------------------------------------------------
`);

linkedList.insertAt(10, 1);

console.log(`insert a new node at index 1: ${linkedList.toString()}
size: ${linkedList.size}`);

console.log(`
-------------------------------------------------------
`);

linkedList.removeAt(2);

console.log(`remove the node at index 2: ${linkedList.toString()}
size: ${linkedList.size}`);

function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	};
}
