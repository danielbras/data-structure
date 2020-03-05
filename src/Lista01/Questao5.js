import Pilha from "../Stack"

export default class DecToBin {
    constructor(size){
        this.maxSize = size;
        this.data = [];
        this.top = -1;
        this.pilha = new Pilha(this.maxSize);
    }

    push(newData) {
       this.data[++this.top] = newData;
    }

    pop() {
        if (this.isEmpty()) {
          throw new Error("Underflow");
        } else {
          return this.data[this.top--];
        }
    }

    peek() {
        if (this.isEmpty()) {
          throw new Error("Stack is empty");
        }
        return this.data[this.top];
    }

    decToBin(decimal){
        for (let i = 0; i < 8 ; i++) {    
            this.pilha.push(decimal % 2);
            decimal = Math.floor(decimal / 2)
        }
        for (let i = 0; i < 8; i++) {        
            this.push(this.pilha.pop());
        }
    }

    print() {
        let result = "[";
        for (let i = 0; i < this.size(); i++) {
          result += ` ${this.data[i]} `;
        }
        result += "]"
        return result;
    }

    size() {
        return this.top + 1;
    }

    clear() {
        this.top = -1;
    }

    isEmpty() {
        return this.size() === 0;
    }  
}