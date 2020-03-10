import Pilha from "../src/Lista_2/Questao1";

let pilha;

beforeEach(() => pilha = new Pilha());

test("Last In First Out - basic operations", () => {
  pilha.push(69);
  pilha.push(15);
  pilha.push(25);
  pilha.push(10);
  pilha.push(90);
  expect(pilha.pop()).toBe(90);
  expect(pilha.size()).toBe(4);
  expect(pilha.peek()).toBe(10);
});

test("Underflow", () => {
  expect(() => {
    pilha.pop();
  }).toThrowError("Underflow");
});

test("Peek", () => {
  pilha.push(0);
  pilha.push(1);
  pilha.push(2);
  expect(pilha.peek()).toBe(2);
});

test("Clear test", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.push(5);
  pilha.push(6);
  expect(pilha.size()).toBe(6);
  pilha.clear();
  expect(pilha.size()).toBe(0);
})