import Pilha from "../Stack";

export default class Bracket {
    constructor(string) {
        this.text = string;
        this.stack = new Pilha(this.text.length);
    }

    parseBracket() {
        let character;

        for(let i = 0; i < this.text.length; i++){
            character = this.text.charAt(i);

            if (this.isExist(character)) {
                this.stack.push(character);            
            } else if (this.isClosing(character)){
                if (this.stack.size() === 0) {
                    throw new Error("Não possue bracket de abertura");
                } else {
                    if (this.stack.peek() == '[' && character == ']' || 
                            this.stack.peek() == '(' && character == ')')
                        this.stack.pop();
                }
            }
        }

        if(this.stack.isEmpty()) {
            return "bem-formada";
        } else {
            return "mal formada";
        }
    }

    isExist(char) {
       if (char == '[' || char == '(') {
           return true;
       } else {
           return false;
       }
    }

    isClosing(char) {
        if (char == ']' || char == ')') {
            return true;
        } else {
            return false;
        }
    }
}