/**
 * TODO: Intersection
 *
 * Given Two (singly) Linked Lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on refrence
 * not value, That is, if the kth node of the first linked list is the exact same node
 * (by refrence) as the jth node of the second linked list, then they are intersecting.
 *
 */

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

const isIntersected = (l1, l2) => {
	if (!l1 || !l2) return false
	let [p1, p2] = [l1, l2]

	while (p1) {
		while (p2) {
			if (p1 === p2) return true
			p2 = p2.next
		}
		p1 = p1.next
	}
	return false
}
