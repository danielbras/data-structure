export default class Pilha {
  /**
   * Construtor da classe
   * @param {number} [size = 5]  = Tamanho da pilha. Caso não informado a Pilha terá tamanho 5.
   */
  constructor(size = 5) {
    this.maxSize = size;
    this.data = [];
    this.top = -1;
  }

  /**
   * Adiciona um elemento na Pilha.
   * @param {number} newData - Elemento a ser adicionado á Pilha.
   * @throws {Error} - Lança um erro caso a pilha esteja cheia.
   */
  push(newData) {
    if (this.isFull()) {
      throw new Error("Overflow");
    } else {
      this.data[++this.top] = newData;
    }
  }

  /**
   * Remove um elemento da Pilha.
   * @returns {any} - Retorna o elemento removido da Pilha.
   * @throws {Error} - Lança um erro de Underflow se a pilha esteja vazia.
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    } else {
      return this.data[this.top--];
    }
  }

  /**
   * Retorna o elemento no topo da Pilha sem remover.
   * @returns {any} - Elemento do topo da Pilha
   * @throws {Error} - Lança um erro de Underflow caso a Pilha esteja vazia.
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.data[this.top];
  }

  /**
   * Retorna o tamanho da Pilha.
   * @returns {number} - Tamanho da Pilha.
   */
  size() {
    return this.top + 1;
  }

  clear() {
    this.top = -1;
  }

  /**
   * Verifica se uma Pilha está vazia.
   * @returns {boolean} - Retorna [true] se a Pilha estiver vazia, [false] caso contrário.
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Verifica se uma Pilha está cheia.
   * @returns {boolean} - Retorna [true] se a Pilha estiver cheia, ou [false] caso contrário.
   */
  isFull() {
    return this.size() === this.maxSize;
  }

  /**
   * Retorna todos os elementos da pilha em uma string.
   * @returns {string} - Conteúdo da pilha formatado.
   */
  print() {
    let result = "[";
    let lastElement;
    for (let i = 0; i < this.top; i++) {
      result += ` ${this.data[i]},`;
      lastElement = this.data[i + 1];
    }
    return (result += ` ${lastElement} ]`);
  }

  /**
   * Retorna todos os elemento da pilha com
   * @returns {string} - Pilha com o topo e base invertidos
   */
  change() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    let end = new Pilha(this.maxSize);
    let auxiliary = new Pilha(this.maxSize);

    console.log(this.print());

    end.push(this.pop());
    while (this.maxSize != this.top + this.maxSize) {
      auxiliary.push(this.pop());
    }
    while (auxiliary.maxSize != auxiliary.top + auxiliary.maxSize + 1) {
      end.push(auxiliary.pop());
    }
    end.push(this.pop());

    console.log(end.print());
    return end;
  }
}
