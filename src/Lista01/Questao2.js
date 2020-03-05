import Pilha from "../Stack";

export default class ReverseTopBase {
  constructor(size = 5) {
    this.maxSize = size;
    this.data = [];
    this.top = -1;
  }

  push(newData) {
    if (this.isFull()) {
      throw new Error("Overflow");
    } else {
      this.data[++this.top] = newData;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    } else {
      return this.data[this.top--];
    }
  }
  reverseTopBase() {
    let aux = new Pilha(this.maxSize);
    let output = new Pilha(this.maxSize);

    output.push(this.pop());

    while (this.size() !== 1) {
      aux.push(this.pop());
    }
    while (!aux.isEmpty()) {
      output.push(aux.pop());
    }
    output.push(this.pop());
    aux.clear();
    // POG
    while(!output.isEmpty()) {
      aux.push(output.pop());
    }
    while(!aux.isEmpty()) {
      this.push(aux.pop());
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.data[this.top];
  }

  print() {
    let result = "[";
    let lastElement;
    for (let i = 0; i < this.top; i++) {
      result += `${this.data[i]} `;
      if (i + 1 !== undefined) {
        lastElement = this.data[i + 1];
      }
    }
    return result += `${lastElement}]`;
  }

  size() {
    return this.top + 1;
  }

  clear() {
    this.top = -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  isFull() {
    return this.size() === this.maxSize;
  }
}
