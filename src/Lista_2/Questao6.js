import List from "../Lista";
import Pilha from "../Pilha";

class listSubstring {
    constructor() {
        this.list = new List();
    }

    substring(posA, posB) {
        let aux = this.list.toString();
        let result = new List();
        let count = 0;

        for (let i = 0; i < aux.length; i++) {
            if(aux[i] !== "-" && aux[i] !== ">"){
                if (count >= posA && count <= posB) {
                    result.append(aux[i]);
                }
                count++;
            }
        }
        // console.log(result.toString());
        return result.toString();
    }
    add(string) {
        for (let i = 0; i < string.length; i++) {
            this.list.append(string[i]);
        }
    }
    append(string) {
        this.add(string);
    }

    removeBeginning() {
        this.list.removeBeginning();
    }

    removeEnd() {
        this.list.removeEnd();
    }

    toString() {
        this.list.toString();
    }

    size() {
        this.list.size();
    }

    search(data) {
        this.list.search(data);
    }
}

export default listSubstring;