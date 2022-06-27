/**
 * TODO: Minimal Tree:
 *
 * Given a sorted (increasing order) array with unique integer elements,
 * write an algorithm to create binary search tree with minimal height
 */

class TreeNode {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

const createMinimalBST = arr => {
	return createMinBST(arr, 0, arr.length - 1)
}

const createMinBST = (arr, start, end) => {
	if (end < start) return null
	let mid = ~~((start + end) / 2)
	const n = new TreeNode(arr[mid])
	n.left = createMinBST(arr, start, mid - 1)
	n.right = createMinBST(arr, mid + 1, end)
	return n
}
