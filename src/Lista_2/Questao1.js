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
            throw new Error("Underflow");
        }
        let dado = this.lastData();
        this.list.removeEnd();
        return dado;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.lastData();
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
        this.list = new Lista();
    }

    // Função extra para reutilizar código
    lastData() {
        let anterior = this.list.head;
        let atual = this.list.head.proximo;

        while (atual !== null) {
            anterior = atual;
            atual = atual.proximo;
        }
        return anterior.dado;
    }
}