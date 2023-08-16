/**
 * TODO:
 * Queue Via Stacks:
 *
 * Implement a MyQueue class which implements a queue using two stacks
 * HINT: Queue content is the reverse order of stack content
 */

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (!this.top) return;
    let temp = this.top.data;
    this.top = this.top.next;
    this.size--;
    return temp;
  }

  peek() {
    if (!this.top) return;
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

class MyQueue {
  constructor() {
    this.newStack = new MyStack();
    this.oldStack = new MyStack();
  }

  size() {
    return this.newStack.size + this.oldStack.size;
  }

  add(data) {
    this.newStack.push(data);
  }

  #shiftStacks() {
    if (!this.newStack.isEmpty()) {
      while (!this.newStack.isEmpty()) this.oldStack.push(this.newStack.pop());
    }
  }

  remove() {
    this.#shiftStacks();
    return this.oldStack.pop();
  }

  peek() {
    this.#shiftStacks();
    return this.oldStack.peek();
  }
}

const qu = new MyQueue();

qu.add(5);
qu.add(2);
qu.add(1);

console.log(qu.peek());
