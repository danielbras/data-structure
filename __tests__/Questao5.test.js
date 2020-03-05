import Pilha from "../src/Lista01/Questao5";

let stack;

beforeEach(() => {
    stack = new Pilha(8);
});

test("Convert decimal to binary", () => {
    stack.decToBin(254);
    console.log(stack.print());
})



