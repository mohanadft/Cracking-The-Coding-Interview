/**
 * TODO:
 * Delete Middle Node:
 *
 * Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily the exact middle)
 * of a singly linked list, given only access to that node.
 *
 * EXAMPLE
 * Input:the node c from the linked lista->b->c->d->e->f Result:
 * nothing is returned, but the new linked list looks like a->b->d->e->f
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const deleteNode = n => {
  if (!n || !n.next) return false;
  let next = n.next;
  n.data = next.data;
  n.next = next.next;
  return true;
};
