/**
 *
 * Write a program to sort a stack such that the smallest items are on the top,
 * You can use an additional temporary stack, but you may not copy the elements into
 * any other data structure (such as an array). The stack supports the following operations: push, pop
 * peek, and isEmpty.
 *
 */

class StackNode {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class MyStack {
	constructor(top = null) {
		this.top = new StackNode(top)
	}

	push(data) {
		const newNode = new StackNode(data)
		if (!this.top) {
			this.top = newNode
			return
		}
		newNode.next = this.top
		this.top = newNode
	}

	pop() {
		if (!this.top) return
		let temp = this.top.data
		this.top = this.top.next
		return temp
	}

	peek() {
		if (!this.top) return
		return this.top.data
	}

	getMin() {
		return this.peek()
	}

	isEmpty() {
		return this.top === null
	}
}

// Solution

const sort = s => {
	const r = new MyStack()
	while (!s.isEmpty()) {
		let target = s.pop()
		while (!r.isEmpty() && r.peek() > target) s.push(r.pop())
		r.push(target)
	}
	while (!r.isEmpty()) s.push(r.pop())
}

// Solution (Which is not allowed by the Question but for you record)

const sort2 = s => {
	const sortedArray = []

	while (!s.isEmpty()) sortedArray.push(s.pop())

	sortedArray.sort((a, b) => a - b)

	while (sortedArray.length != 0) s.push(sortedArray.pop())
}
