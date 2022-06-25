/**
 * TODO:
 * Remove Dups:
 *
 * Write code to remove duplicates from an unsorted linked list.
 */

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

const removeDups = head => {
	if (!head) return

	let values = []
	let current = head

	while (current) {
		if (!values.includes(current.data)) values.push(current.data)
		current = current.next
	}

	current = head
	let prev = null

	while (values.length !== 0) {
		current.data = values.shift()
		prev = current
		current = current.next
	}

	prev.next = null
}

// Another Solution

const removeDups2 = head => {
	if (!head) return

	let valuesSet = new Set()

	let current = head,
		prev = null

	while (current) {
		if (valuesSet.has(current.data)) {
			prev.next = current.next
		} else {
			valuesSet.add(current.data)
			prev = current
		}
		current = current.next
	}
}

// Another Solution (No Buffer)

const removeDups3 = head => {
	if (!head) return

	let N = head,
		current = null,
		prev = null

	while (N) {
		current = N.next
		prev = N
		while (current) {
			if (N.data === current.data) prev.next = current.next
			else prev = current
			current = current.next
		}
		N = N.next
	}
}
