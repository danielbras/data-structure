import Lista from "../Lista";

export default class Pilha {
    constructor() { 
        this.list = new Lista();
    }

    push(dado) {
        this.list.append(dado);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error();
        }
        let dado = this.lastData();
        this.list.removeEnd();
        return dado;
    }

    peek() {
        return this.lastData();
    }

    size() {
        this.list.size();
    }

    isEmpty() {
        this.list.isEmpty();
    }

    print() {
        this.list.toString();
    }

    lastData() {
        let anterior = this.list.head;
        let atual = this.list.head.proximo;

        while (atual.proximo !== null) {
            anterior = atual;
            atual = atual.proximo;
        }
        return anterior.dado;
    }
}