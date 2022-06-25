/**
 * Sum Lists: You have two numbers represented by a
 * linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1 's
 * digit is at the head of the list. Write a function that adds
 * the two numbers and returns the sum as a linked list.
 * EXAMPLE
 * Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
 * Output: 2 -> 1 -> 9. That is, 912.
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * EXAMPLE
 * Input:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
 * Output: 9 -> 1 -> 2. That is, 912.
 */

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

const sumLists = (head1, head2) => {
	if (!head1 || !head2) return null

	let s1 = '',
		s2 = ''

	let N1 = head1,
		N2 = head2

	while (N1) {
		s1 += N1.data
		N1 = N1.next
	}

	while (N2) {
		s2 += N2.data
		N2 = N2.next
	}
	let result = [
		...String(+[...s1].reverse().join`` + +[...s2].reverse().join``)
	].reverse().join``
	let sumNode = new Node(+result[0])
	let N = sumNode
	for (let i = 1; i < result.length; i++) {
		N.next = new Node(+result[i])
		N = N.next
	}
	return sumNode
}

const sumLists2 = (head1, head2) => {
	if (!head1 || !head2) return null

	let s1 = '',
		s2 = ''

	let N1 = head1,
		N2 = head2

	while (N1) {
		s1 += N1.data
		N1 = N1.next
	}

	while (N2) {
		s2 += N2.data
		N2 = N2.next
	}

	let result = String(+s1 + +s2)
	let sumNode = new Node(+result[0])
	let N = sumNode

	for (let i = 1; i < result.length; i++) {
		N.next = new Node(+result[i])
		N = N.next
	}
	return sumNode
}
