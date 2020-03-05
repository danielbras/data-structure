import Fila from "../Fila";

export default class Stack2 {
  constructor(size = 5) {
    this.maxSize = size;
    this.top = -1;
    this.queueA = new Fila(this.maxSize);
    this.queueB = new Fila(this.maxSize);
  }

  push(newData) {
    if (this.queueA.isFull()) {
      throw new Error("Stack overflow");
    } else {
      this.queueB.enqueue(newData);
      top++;
      while (!this.queueA.isEmpty()) {
        this.queueB.enqueue(this.queueA.front());
        this.queueA.dequeue();
      }
      let queue = this.queueA;
      this.queueA = this.queueB;
      this.queueB = queue;
    }
  }

  pop() {
    if (this.queueA.isEmpty()) {
      throw new Error("Stack underflow");
    }
    this.queueA.dequeue();
    this.top--;
  }

  peek() {
    if (this.queueA.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      return this.queueA.front();
    }
  }

  clear() {
    this.queueA.clear();
    this.top = -1;
  }
  size() {
    return this.top;
  }

  print() {
    return this.queueA.toString();
  }
}
