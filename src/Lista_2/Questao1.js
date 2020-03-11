import List from "../Lista";

export default class Stack {
    constructor() { 
        this.list = new List();
    }

    push(data) {
        this.list.append(data);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Underflow");
        }
        let data = this.getLastElement();
        this.list.removeEnd();
        return data;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.getLastElement();
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

    // Função extra para reutilizar código
    getLastElement() {
        let previous = this.list.head;
        let current = this.list.head.next;

        while (current !== null) {
            previous = current;
            current = current.next;
        }
        return previous.data;
    }
}