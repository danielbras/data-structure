export default class Queue {
  constructor(size = 10) {
    this.data = [];
    this.end = 0;
    this.start = 0;
    this.maxSize = size;
  }

  enqueue(newData) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    } else {
      this.data[this.end++] = newData;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this.data[this.start++];
    }
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this.data[this.start];
    }
  }

  clear() {
    this.start = this.end = 0;
  }

  toString() {
    let string = "[";
    for (let i = this.start; i < this.end; i++) {
      string += `${this.data[i]}`;
    }
    string += "]";
    return string;
  }

  size() {
    return this.end - this.start;
  }

  isEmpty() {
    return this.start === this.end;
  }

  isFull() {
    return this.end - this.start === this.maxSize;
  }
}
