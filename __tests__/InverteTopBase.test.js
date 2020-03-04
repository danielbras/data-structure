import Stack from "../src/Lista01/InverteTopBase";

let pilha;

beforeEach(() => {
  pilha = new Stack(5);
});

test("Troca o elemento do topo com a basa", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.push(5);
  expect(pilha.change().print()).toBe("[ 5, 2, 3, 4, 1 ]");
});

test("Tenta trocar o top e a base de uma pilha vazia", () => {
  expect(() => {
    pilha.change();
  }).toThrowError("Stack is empty");
});
