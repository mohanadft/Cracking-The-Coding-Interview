/**
 * TODO: Pairwise swap elements of a given linked list
 *
 * Given a singly linked list, write a function to swap elements pairwise
 * For example, if the linked list is 1->2->3->4->5 then the function should
 * change it to 2->1->4->3->5,
 * and if the linked list is then the function should change it to.
 *
 */

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head
	}
}

// Iteratively

const swap = list => {
	if (!list.head) return null
	if (!list.head.next) return head
	let N = list.head
	while (N && N.next) {
		;[N.data, N.next.data] = [N.next.data, N.data]
		N = N.next.next
	}
	return list
}

// Recursively

const swap2 = head => {
	if (!head || !head.next) return
	;[head.data, head.next.data] = [head.next.data, head.data]
	swap2(head.next.next)
}
