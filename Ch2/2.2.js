/**
 * TODO:
 * Return Kth to Last:
 *
 * Implement an algorithm to find the kth to last element of a singly linked list.
 */

class Node {
	constructor(data) {
		this.data = data
		this.next = null
		this.size = 1
	}
	push(data) {
		let N = this
		while (N.next) {
			N = N.next
		}
		N.next = new Node(data)
		this.size++
	}
}

// if Size is Unknown

const kthToLast = (head, k) => {
	if (!head) return null

	if (!head) return
	let N1 = head
	let N2 = head
	for (let i = 0; i < k; i++) {
		if (!N1) return null
		N1 = N1.next
	}
	while (N1) {
		N1 = N1.next
		N2 = N2.next
	}
	return N2.data
}

// Another Solution (if Size is Known)
const kthToLast2 = (head, k) => {
	if (!head || k > head.size) return null
	let N = head
	for (let i = 0; i < head.size - k && N.next; i++) N = N.next
	return N.data
}

// Another Solution (Recursively)
const kthToLast3 = (head, k) => {
	if (!head) return null
	let N = head
	let index = kthToLast3(N.next, k) + 1
	if (index === k) console.log(head.data)
	return index
}
