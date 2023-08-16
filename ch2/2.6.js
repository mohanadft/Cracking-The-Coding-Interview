class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const isPalindrome = head => {
  if (!head || !head.next) return true;
  let current = head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values.join`` == values.reverse().join``;
};

const isPalindrome2 = head => {
  let fast = head;
  let slow = head;
  const stack = [];

  while (fast && fast.next) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) slow = slow.next;

  while (slow) {
    let top = stack.pop();
    if (top !== slow.data) return false;
    slow = slow.next;
  }
  return true;
};
