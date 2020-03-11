import Pilha from "../src/Pilha";
import reverseTopBase from "../src/Lista_1/Questao2";

let pilha;

beforeEach(() => {
	pilha = new Pilha(5);
});

test("Teste de troca", () => {
	pilha.push(1);
	pilha.push(2);
	pilha.push(3);
	pilha.push(4);
	pilha.push(5);
	expect(pilha.toString()).toBe("[ 1  2  3  4  5 ]");
	expect(reverseTopBase(pilha).toString()).toBe("[ 5  2  3  4  1 ]");
});