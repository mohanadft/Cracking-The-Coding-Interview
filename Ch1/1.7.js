/**
 * TODO:
 * Rotate Matrix:
 *
 * Given an image represented by an NxN matrix,
 * where each pixel in the image is 4 bytes, write a method to rotate
 * the image by 90 degrees. Can you do this in place?
 */

// Another Solution (90deg rotated in clockwise direction)

const rotate = arr => {
	const rotatedArr = []
	let row = []
	for (let i = 0; i < arr[0].length; i++) {
		row = []
		for (let j = 0; j < arr.length; j++) {
			row.push(arr[j][i])
		}
		rotatedArr.push(row.reverse())
	}
	return rotatedArr
}

// Another Solution (rotated 90deg Counterclockwise)

const rotate2 = arr => {
	const rotatedArr = []
	let row = []
	for (let i = arr[0].length - 1; i >= 0; i--) {
		row = []
		for (let j = arr.length - 1; j >= 0; j--) {
			row.push(arr[j][i])
		}
		rotatedArr.push(row.reverse())
	}
	return rotatedArr
}

// Another Solution (90deg rotated in clockwise direction)

const rotate3 = matrix =>
	matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
