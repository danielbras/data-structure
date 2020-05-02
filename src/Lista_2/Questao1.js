import List from '../Lista';
import customReturnEnd from '../CustomReturnEnd';

export default class Stack {
  constructor() {
    this.list = new List();
  }

  push(data) {
    this.list.append(data);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Underflow');
    }
    let data = customReturnEnd(this.list);
    this.list.removeEnd();
    return data;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return customReturnEnd(this.list);
  }

  size() {
    return this.list.size();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    return this.list.toString();
  }

  clear() {
    this.list = new List();
  }
}
