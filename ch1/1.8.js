/**
 * TODO:
 * Zero Matrix:
 *
 * Write an algorithm such that if an element
 * in an MxN matrix is 0, its entire row and column are set to 0.
 */

const zeroMatrix = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i].fill('0');
        matrix.forEach(row => (row[j] = '0'));
      }
    }
  }
  return matrix.map(row => row.map(e => +e));
};
