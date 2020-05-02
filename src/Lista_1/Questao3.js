import Fila from '../Fila';

export default class Stack2Queue {
  constructor(maxtam = 5) {
    this.firstQueue = new Fila(maxtam);
    this.auxQueue = new Fila(maxtam);
  }

  push(dado) {
    if (this.isFull()) {
      throw new Error('Stack overflow');
    } else {
      while (this.firstQueue.size() > 0) {
        this.auxQueue.enqueue(this.firstQueue.dequeue());
      }
      this.firstQueue.enqueue(dado);
      while (this.auxQueue.size() > 0) {
        this.firstQueue.enqueue(this.auxQueue.dequeue());
      }
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }
    return this.firstQueue.dequeue();
  }

  peek() {
    return this.firstQueue.front();
  }

  isEmpty() {
    return this.firstQueue.isEmpty();
  }

  size() {
    return this.firstQueue.size();
  }

  isFull() {
    return this.firstQueue.isFull();
  }

  print() {
    return this.firstQueue.toString();
  }
}
