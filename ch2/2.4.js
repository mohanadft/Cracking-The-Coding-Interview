/**
 * TODO:
 * Partition:
 *
 * Write code to partition a linked list around a value x, such that all
 * nodes less than x come before all nodes greater than or equal to x
 * If x is contained within the list, the values of x only need to be after
 * the elements less than x (see below). The partition element x can appear
 * anywhere in the "right partition"; it does not need to appear between the
 * left and right partitions.
 *
 * EXAMPLE
 * Input: [1, 4, 3, 2, 5, 2], x = 3
 * Output: [1, 2, 2, 4, 3, 5]
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const partition = (head, k) => {
  let N1 = head;
  const valuesGreaterThanK = [];
  const valuesLessThanK = [];
  while (N1) {
    if (N1.data >= k) valuesGreaterThanK.push(N1.data);
    else valuesLessThanK.push(N1.data);
    N1 = N1.next;
  }
  N1 = head;
  while (valuesLessThanK.length !== 0) {
    N1.data = valuesLessThanK.shift();
    N1 = N1.next;
  }
  while (valuesGreaterThanK.length !== 0) {
    N1.data = valuesGreaterThanK.shift();
    N1 = N1.next;
  }
};

const partition2 = (head, k) => {
  let N1 = head;
  let left = null,
    right = null;
  let nLeft = left,
    nRight = right;

  while (N1) {
    if (N1.data >= k) {
      if (!right) {
        right = new Node(N1.data);
        nRight = right;
      } else {
        nRight.next = new Node(N1.data);
        nRight = nRight.next;
      }
    } else {
      if (!left) {
        left = new Node(N1.data);
        nLeft = left;
      } else {
        nLeft.next = new Node(N1.data);
        nLeft = nLeft.next;
      }
    }
    N1 = N1.next;
  }
  nLeft.next = right;

  return left;
};
