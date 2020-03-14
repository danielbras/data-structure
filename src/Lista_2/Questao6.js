import List from "../Lista";

export default class Substrings{
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
            this.list.add(string[i]);
        }
    }
    append(string) {
        for (let i = 0; i < string.length; i++) {
            this.list.append(string[i]);
        }
    }

    // removeBeginning() {
    //     this.list.removeBeginning();
    // }

    // removeEnd() {
    //     this.list.removeEnd();
    // }

    toString() {
        this.list.toString();
    }

    size() {
        this.list.size();
    }

    // search(data) {
    //     this.list.search(data);
    // }
}