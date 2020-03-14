/**
 * Implementação de uma Lista Duplamente Ligada
 * @author {https://github.com/taniro}
 */


class Node {

	/**
	 * Construtor do Nó que será usado para implementar uma Lista Duplamente Ligada
	 * @param {any} [data]  - Novo elemento que será inserido no Nó
	 * Os nós apontam para 2 direções: O next nó e o previous
	 */
	constructor(data) {
		this.data = data;
		this.previous = null;
		this.next = null;
	}
}

class ListaDuplamenteLigada {
	
	/**
	 * Construtor de uma Lista Duplamente Ligada
	 * Definindo quem é a cabeça[head] e quem é a cauda[tail] para implementar a recursividade na Lista
	 */
	constructor() {
		this.head = null;
		this.tail = null;
	}

	/**
	 * Insere um Novo Nó no inicio da Lista
	 * @param {any} [data] - Novo nó que está sendo inserindo na Lista 
	 * Caso a Lista esteja vazia, o primeiro nó a ser inserido será a cabeça e a cauda ao mesmo tempo
	 */
	add(data) {
		let novo_no = new Node(data);
		if (this.isEmpty()) {
			this.head = novo_no;
			this.tail = novo_no;
			novo_no.previous = null;
			novo_no.next = null;
		} else {
			novo_no.next = this.head;
			novo_no.previous = null;
			this.head.previous = novo_no;
			this.head = novo_no;
		}
	}

	/**
	 * Insere um Novo Nó no final da Lista
	 * @param {any} [data] - Novo nó que está sendo inserindo no final da Lista
	 * Caso a Lista esteja vazia, o primeiro nó a ser inserido será a cabeça e a cauda ao mesmo tempo
	 */
	append(data) {
		let novo_no = new Node(data);

		if (this.isEmpty()) {
			this.head = novo_no;
			this.tail = novo_no;
			novo_no.previous = null;
			novo_no.next = null;
		} else {
			novo_no.next = null;
			novo_no.previous = this.tail;

			this.tail.next = novo_no;
			this.tail = novo_no;
		}
	}

	/**
	 * Remove o Nó que se encontra no começo da Lista
	 * 
	 */
	removeBeginning() {
		if (!this.isEmpty()) {
			let tmp = this.head.next;

			this.head = tmp;
			this.head.previous = null;
		}
	}

	/**
	 * Remove um Nó específico da Lista
	 * @param {any} [data] - Nó que será removido
	 * @returns {boolean} - Retorna true se o Nó foi removido, e false se ele não foi removido
	 */
	remove(data) {
		if (!this.isEmpty()) {
			let current = this.head;
			let next = this.head.next;
			let last = this.tail;

			if (current.data === data) {
				return this.removeBeginning();
			} else if (last.data === data) {
				return this.removeEnd();
			} else {
				while (next != null) {
					if (next.data === data) {
						aux = next.next;
						current.next = next.next;
						aux.previous = current;
						return true;
					}
					//iteração
					current = next;
					next = next.next;
				}
			}
		}

		return false;
	}

	/**
	 * Remove o Nó que está no final da Lista
	 * 
	 */
	removeEnd() {
		if (!this.isEmpty()) {
			let tmp = this.tail.previous;

			this.tail = tmp;
			this.tail.next = null;
		}
	}

	/**
	 * Verifica se a Lista está fazia ou não
	 * @returns {boolean} - Retorna [true] se a fila estiver vazia e [false] caso ela não esteja
	 */
	isEmpty() {
		return this.head === null;
	}

	/**
	 * Formatação da Lista em String
	 * @returns {string} - Lista retornada em formato de string
	 */
	toString() {
		let tmp = this.head;
		let string = "";

		while (tmp != null) {
			string += tmp.data + (tmp.next ? "->" : "");
			tmp = tmp.next;
		}

		return string;
	}

	/**
	 * Retorna o tamanho da Lista
	 * @returns {number} - Tamanho da Lista
	 */
	size() {
		let count = 0;
		let tmp = this.head;

		while (tmp != null) {
			tmp = tmp.next;
			count++;
		}
		return count;
	}

	/**
	 * Insere um Novo Nó em um local específico da Lista
	 * @param {number} [index] - O índicie que o novo nó será inserido 
	 * @param {any} [data] - Novo Nó a ser inserido na Lista 
	 */
	addAt(index, data) {
		if (index >= this.size()) {
			//adicionando no final
			this.append(data);
		} else {
			if (index <= 0) {
				//adicionando no inicio
				this.add(data);
			} else {
				let novo_no = new Node(data);
				let i = 1;

				let aux_a = this.head;
				let aux_b = this.head.next;

				while (i != index) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.next;
					i++;
				}
				aux_a.next = novo_no;
				novo_no.next = aux_b;
				novo_no.previous = aux_a;
				aux_b.previous = novo_no;
			}
		}
	}

	/**
	 * Formatação da Lista em um Array
	 * @returns {any} - Lista em formato de array
	 */
	asArray() {
		let current = this.head;
		let dados = [];

		while (current != null) {
			dados.push(current.data);
			current = current.next;
		}

		return dados;
	}

	/**
	 * Procura um Dado específico na Lista
	 * @param {any} [data] - Dado que será procurado na Lista
	 * @returns {boolean} - Retorna [true] caso o data tenha sido encontrado e [false] se ele não existir
	 */
	search(data) {
		if (this.head === null) {
			return false;
		} else {
			let tmp = this.head;
			while (tmp !== null) {
				if (tmp.data == data) {
					return true;
				}
				//iteração
				tmp = tmp.next;
			}
			return false;
		}
	}
}

export default ListaDuplamenteLigada;