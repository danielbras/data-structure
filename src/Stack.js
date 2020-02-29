
/**
 * Implementação de uma pilha
 * @author {https://github.com/danielbras}
 */

export default class Pilha {

    /**
     * Construtor da classe
     * @param {number} [size = 5]  = Tamanho da pilha. Caso não informado a Pilha terá tamanho 5.
     */
    constructor(size = 5) {
        this.maxSize = size
        this.data = []
        this.top = -1
    }

    /**
     * Adiciona um elemento na Pilha.
     * @param {number} newData - Elemento a ser adicionado á Pilha.
     * @throws {Error} - Lança um erro caso a pilha esteja cheia.
     */
    push(newData) {
        if(this.isFull()){
            throw new Error("Overflow")
        } else {
            this.data[++this.top] = newData
        }
    }
    
    /**
     * Remove um elemento da Pilha.
     * @returns {any} - Retorna o elemento removido da Pilha.
     * @throws {Error} - Lança um erro de Underflow se a pilha esteja vazia.
     */
    pop() {
        if(this.isEmpty()){
            throw new Error("Underflow")
        } else {
            return this.data[this.top--]
        }
    }
    
    /**
     * Retorna o elemento no topo da Pilha sem remover.
     * @returns {any} - Elemento do topo da Pilha
     * @throws {Error} - Lança um erro de Underflow caso a Pilha esteja vazia.
     */
    peek() {
        if(this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.data[this.top]
    }

    /**
     * Remove todos os elementos da Pilha de forma lógica.
     */
    clear() {
        this.top = -1
    }

    /**
     * Retorna o tamanho da Pilha.
     * @returns {number} - Tamanho da Pilha.
     */
    size() {
        return this.top + 1
    }
    
    /**
     * Verifica se uma Pilha está vazia.
     * @returns {boolean} - Retorna [true] se a Pilha estiver vazia, [false] caso contrário.
     */
    isEmpty() {
        return this.size() === 0
    }

    /**
     * Verifica se uma Pilha está cheia.
     * @returns {boolean} - Retorna [true] se a Pilha estiver cheia, ou [false] caso contrário.
     */
    isFull() {
        return this.size() === this.maxSize
    }
    

    /**
     * Retorna todos os elementos da pilha em uma string.
     * @returns {string} - Conteúdo da pilha formatado.
     */
    print() {
        let result = '['

        for (let i = 0; i <= this.top; i++) {
            result += ` ${this.data[i]} `
        }
        return result += ']'
    }
}