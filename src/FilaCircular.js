export default class FilaCircular {
	constructor(size = 10) {
		this.data = [];
		this.fim = -1;
		this.inicio = -1;
		this.maxSize = size;
	}

	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		}
		if (this.isEmpty()) {
			this.inicio = this.fim = 0;
		} else {
			this.fim = this.getNextEndPosition();
		}
		this.data[this.fim] = newData;
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		let r = this.data[this.inicio];
		if (this.size() === 1) {
			this.clear();
		} else {
			this.inicio = this.getNextBeginPosition();
		}
		return r;
	}

	front() {
		return this.data[this.inicio];
	}

	clear() {
		this.inicio = this.fim = -1;
	}

	toString() {
		let result = "[";
		if (this.inicio <= this.fim) {
			for (let i = this.inicio; i <= this.fim; i++) {
				result += ` ${this.data[i]} `;
			}
		} else {
			for (let i = this.inicio; i < this.maxSize; i++) {
				result += ` ${this.data[i]} `;
			}
			for (let i = 0; i <= this.fim; i++) {
				result += ` ${this.data[i]} `;
			}
		}
		result += "]";
		return result;
	}

	size() {
		if (this.isEmpty()) {
			return 0;
		} else if (this.inicio === this.fim) {
			return 1;
		} else if (this.inicio < this.fim) {
			return this.fim - this.inicio + 1;
		} else {
			return this.maxSize - this.inicio + this.fim + 1;
		}
	}

	isEmpty() {
		return this.inicio === -1;
	}

	isFull() {
		return (
			(this.inicio === 0 && this.fim === this.maxSize - 1) ||
			this.fim === (this.inicio - 1) % (this.maxSize - 1)
		);
	}

	getNextEndPosition() {
		if (this.fim === this.maxSize - 1 && this.inicio !== 0) {
			return 0
		} else {
			return this.fim + 1
		}
	}

	getNextBeginPosition() {
		if (this.inicio === this.this - 1) {
			return 0
		} else {
			return this.inicio + 1
		}
	}
}