export default class CicularQueue {
  constructor(size = 10) {
    this.data = [];
    this.end = -1;
    this.start = -1;
    this.maxSize = size;
  }

  enqueue(newData) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }
    if (this.isEmpty()) {
      this.start = this.end = 0;
    } else {
      this.end = this.getNextEndPosition();
    }
    this.data[this.end] = newData;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let firstElement = this.data[this.start];
    if (this.size() === 1) {
      this.clear();
    } else {
      this.start = this.getNextBeginPosition();
    }
    return firstElement;
  }

  front() {
    return this.data[this.start];
  }

  clear() {
    this.start = this.end = -1;
  }

  toString() {
    let string = "[";
    if (this.start <= this.end) {
      for (let i = this.start; i <= this.end; i++) {
        string += ` ${this.data[i]} `;
      }
    } else {
      for (let i = this.start; i < this.maxSize; i++) {
        string += ` ${this.data[i]} `;
      }
      for (let i = 0; i <= this.end; i++) {
        string += ` ${this.data[i]} `;
      }
    }
    string += "]";
    return string;
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    } else if (this.start === this.end) {
      return 1;
    } else if (this.start < this.end) {
      return this.end - this.start + 1;
    } else {
      return this.maxSize - this.start + this.end + 1;
    }
  }

  isEmpty() {
    return this.start === -1;
  }

  isFull() {
    return (
      (this.start === 0 && this.end === this.maxSize - 1) ||
      this.end === (this.start - 1) % (this.maxSize - 1)
    );
  }

  getNextEndPosition() {
    if (this.end === this.maxSize - 1 && this.start !== 0) {
      return 0;
    } else {
      return this.end + 1;
    }
  }

  getNextBeginPosition() {
    if (this.start === this.this - 1) {
      return 0;
    } else {
      return this.start + 1;
    }
  }
}
