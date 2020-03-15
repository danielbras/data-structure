class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = new Node(null);
  }

  add(data) {
    let newNode = new Node(data);

    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.head.next == null) {
      this.head.next = newNode;
    } else {
      let current = this.head.next;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeBeginning() {
    let current = this.head.next;
    if (current === null) {
      return;
    } else {  
      this.head.next = current.next;
    }
  }

  removeEnd() {
    let previous = this.head;
    let current = this.head.next;

    if (current == null) {
      return;
    }

    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    current = null;
    previous.next = null;
  }

  isEmpty() {
    return this.head.next === null;
  }

  toString() {
    let current = this.head.next;
    let string = "";

    while (current != null) {
      string += current.data + (current.next ? "->" : "");
      current = current.next;
    }
    return string;
  }

  objToString() {
    let aux = this.head.next;
    let string = '';
    while (aux !== null) {
        string += `\n{ nome: ${aux.data.name}, idade: ${aux.data.age} }`;
        aux = aux.next;
    }
    return string;
  }
  size() {
    let count = 0;
    let current = this.head.next;

    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }

  addAt(index, data) {
    if (index >= this.size()) {
      //adicionando no final
      this.append(data);
    } else {
      if (index <= 0) {
        //adicionando no inicio
        this.add(data);
      } else {
        let newNode = new Node(data);
        let i = 0;

        let previous = this.head;
        let current = this.head.next;

        while (i != index) {
          //iteração
          previous = current;
          current = current.next;
          i++;
        }
        previous.next = newNode;
        newNode.next = current;
      }
    }
  }

  search(data) {
    if (this.head.next == null) {
      return false;
    } else {
      let current = this.head.next;
      while (current != null) {
        if (current.data == data) {
          return true;
        }
        //iteração
        current = current.next;
      }
      return false;
    }
  }

  addInOrder(data) {
    //NOTA: Essa função deve ser usada apenas se os elementos já existentes
    //na lista estiverem em ordem crescente.

    let newNode = new Node(data);

    if (this.head.next == null) {
      this.head.next = newNode ;
    } else {
      let previous = this.head;
      let current = this.head.next;

      while (current != null) {
        if (current.data > data) {
          previous.next = newNode;
          newNode.next = current;
          return;
        }
        //iteração
        previous = current;
        current = current.next;
      }

      //caso o if nunca seja true
      previous.next = newNode;
      newNode.next = null;
      return;
    }
  }
}

export default List;