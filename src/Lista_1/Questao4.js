import Pilha from '../Pilha'

export default class Queue2Stack {
	constructor(maxsize) {
		this.firstStack = new Pilha(maxsize);
		this.auxStack = new Pilha(maxsize);
	}

	enqueue(dado) {
		if (this.isFull()) {
			throw new Error("Overflow");
		} else {
			while (this.firstStack.size() > 0) {
				this.auxStack.push(this.firstStack.pop());
			}
			this.firstStack.push(dado);
			while (this.auxStack.size() > 0) {
				this.firstStack.push(this.auxStack.pop());
			}
		}
	}

	dequeue() {
		return this.firstStack.pop();
	}

	isFull() {
		return this.firstStack.isFull();
	}

	isEmpty() {
		return this.firstStack.isEmpty();
	}

	size() {
		return this.firstStack.size();
	}

	front() {
		return this.firstStack.top();
	}

	clear() {
		return this.firstStack.clear();
	}
}