import List from '../Lista';

export default class Queue {
  constructor() {
    this.list = new List();
  }

  enqueue(data) {
    this.list.append(data);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('The queue is empty');
    let data = this.list.head.next.data;
    this.list.removeBeginning();
    return data;
  }

  front() {
    if (this.isEmpty()) throw new Error('The queue is empty');
    return this.list.head.next.data;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
  }

  clear() {
    this.list = new List();
  }

  toString() {
    return this.list.toString();
  }
}
