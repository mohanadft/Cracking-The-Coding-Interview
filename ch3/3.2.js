/**
 * TODO:
 * Stack Min:
 *
 * How would you design a stack which, in addition to push and pop,
 * has a function min which returns the minimum element? Push, Pop
 * and min should all operate in O(1) time
 *
 * Solution:
 *
 * You can make an algorithm that takes The stack as input and compare
 * each element with others but this algorithm will operate in O(n) time
 * and that's not the required solution because our solution is to operate
 * in O(1).
 *
 * So what we're gonna to do is to modify the Push method so it will do:
 * comparing the top value with the added value, if the top value less than the added value we can add at the top
 * so the minimum value will be at the top, else we will push the element under the top
 * because the minimum value will be at the top and the greater value will be after the top
 * by this solution the operation will be in O(1) because you just return the min value, the
 * min value of stack always will be at the top, we can make a function called "getMin()" which
 * returns the top, also you can return the "peek" function which also returns the top.
 *
 * P.S: If you Noticed, the stack nodes are sorted by Ascending order.
 *
 * the solution in line 40-44 && 62-64
 */

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyStack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newNode = new StackNode(data);
    if (data > this.top.data) {
      // Smallest Item wil be on top Always
      newNode.next = this.top.next;
      this.top.next = newNode;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) return;
    let temp = this.top.data;
    this.top = this.top.next;
    return temp;
  }

  peek() {
    if (!this.top) return;
    return this.top.data;
  }

  getMin() {
    return this.peek();
  }

  isEmpty() {
    return this.top === null;
  }
}
