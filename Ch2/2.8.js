class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

const detect = head => {
	if (!head) return null
	if (!head.next) return null

	let fast = head,
		slow = head

	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow == fast) break
	}

	if (!fast || !fast.next) return null

	slow = head

	while (slow != fast) {
		slow = slow.next
		fast = fast.next
	}

	return fast
}
