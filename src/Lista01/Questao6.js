import Fila from "../Fila";

export default class Deque {
    constructor(size = 5){
        this.deque = new Fila(size);
        this.queueAux = new Fila(size);
    }

    inserirInicio(newData) {
        if (this.deque.isEmpty()) {
            this.deque.enqueue(newData);
        } else {
            while (!this.deque.isEmpty()) {
                this.queueAux.enqueue(this.deque.dequeue());
            }
            this.deque.clear();
            this.deque.enqueue(newData);
            while (!this.queueAux.isEmpty()){
                this.deque.enqueue(this.queueAux.dequeue())
            }
        }
    }

    inserirFim(newData) {
        this.deque.enqueue(newData);
    }

    removerInicio() {
        return this.deque.dequeue();
    }

    removerFim() {
        while (this.deque.size() != 1) {
            this.queueAux.enqueue(this.deque.dequeue());
        }

        this.deque.clear();

        while (!this.queueAux.isEmpty()) {
            this.deque.enqueue(this.queueAux.dequeue())
        }
                
    }

    toString(){
        return this.deque.toString();
    }

    size(){
        return this.deque.size();
    }
}