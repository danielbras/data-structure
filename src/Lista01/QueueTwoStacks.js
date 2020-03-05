/**
 * Implementação de duas pilhas simulando uma fila
 * @author github.com/danielbras
 */
import Stack from "../Stack";

export default class Queue {
  constructor(size = 5) {
    this.maxSize = size;
    this.stack1 = new Stack(this.maxSize);
    this.stack2 = new Stack(this.maxSize);
  }

  enqueue(newData) {
    if (this.stack1.isFull()) {
      throw new Error("Queue is full");
    }
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(newData);

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.stack1.pop();
  }

  front() {
    if (this.stack1.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.stack1.peek();
  }
}
