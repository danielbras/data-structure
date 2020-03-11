import Pilha2Filas from "../src/Lista_1/Questao3";

let pilha;

beforeEach(() => {
  pilha = new Pilha2Filas(5);
});

test("Estouro de pilha", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.push(5);
  expect(() => {
    pilha.push(10);
  }).toThrowError("Stack overflow");
});

test("", () => {
  expect(() => {
    pilha.pop();
  }).toThrowError("Stack underflow");
});

test("operation of stack with two queues", () => {
  pilha.push(1);
  expect(pilha.peek()).toBe(1);
  pilha.push(2);
  expect(pilha.peek()).toBe(2);
  pilha.push(3);
  expect(pilha.peek()).toBe(3);
  pilha.push(4);
  pilha.push(5);
  expect(pilha.peek()).toBe(5);
});
