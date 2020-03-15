import List from "../Lista";
import customReturnEnd from "../CustomReturnEnd";

export default class People {
    constructor() {
        this.list = new List();
        this.array = [];
    }

    addPeople(name, age) {;
        this.list.append({name, age});
        this.array.push(customReturnEnd(this.list));
        this.list.removeEnd();
    }

    /**
     * @returns - Retorna uma lista ligada com as pessoas ordenadas por idade.
     */
    sortByAge() {
        // Comparando os objetos pela propriedade idade (age), colocando em ordem numérica.
        // - Se obj1 for maior que obj2, o obj2 precisar ser trocado com o obj1;
        // - Se não, se o obj2 for maior que o obj1, obj1 deve estar antes do obj2;
        // - Se não, os valores são iguais e não precisam sofre alterações.
        this.array.sort((obj1, obj2) => {
            return (obj1.age > obj2.age) ? 1 : ((obj2.age > obj1.age)) ? -1 : 0;
        });
        let newList = new List();
        for (let i = 0; i < this.array.length; i++) {
            newList.append(`${this.array[i].name} ${this.array[i].age}`);
        }
        // console.log(newList.toString());
        return newList;
    }

    /**
     * @returns - Retorna uma lista ligada com as pessoas ordenadas pelo nome.
     */
    sortByName() {
        // Comparando os objetos pela propriedade nome (name), colocando em ordem alfabética.
        this.array.sort((obj1, obj2) => {
            return (obj1.name > obj2.name) ? 1 : ((obj2.name > obj1.name)) ? -1 : 0;
        });
        let newList = new List();
        for (let i = 0; i < this.array.length; i++) {
            newList.append(`${this.array[i].name} ${this.array[i].age}`);
        }
        // console.log(newList.toString());
        return newList;
    }

    // Sobrescrevi o toString da lista ligada.
    toString() {
        let string = "";
        for (let i = 0; i < this.array.length; i++) {
            string += `${this.array[i].name} ${this.array[i].age}` + (this.array[i+1] === undefined ? "" : "->");
        }
        return string;
    }
}