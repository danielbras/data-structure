import Lista from "../Lista";

export default class Fila {
    constructor() {
        this.list = new Lista();
    }

    enqueue(dado) {
        this.list.append(dado);
    }

    dequeue() {
        if(this.isEmpty()) throw new Error("The queue is empty");
        let data = this.list.head.proximo.dado;
        this.list.removeBeginning();
        return data;
    }

    front() {
        if(this.isEmpty()) throw new Error("The queue is empty");
        return this.list.head.proximo.dado;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    clear() {
        this.list = new Lista();
    }

    toString() {
        return this.list.toString();
    }
}