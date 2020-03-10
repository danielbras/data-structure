import Pilha from "../src/Pilha";

let pilha;

beforeEach(() => {
  pilha = new Pilha(5);
});

test("Instatiation", () => {
  expect(pilha.size()).toBe(0);
});

test("Last In First Out", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.push(5);
  expect(pilha.pop()).toBe(5);
});

test("Stack clean", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.clear();
  pilha.push(5);
  expect(pilha.size()).toBe(1);
});

test("Overflow", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.push(5);
  expect(() => {
    pilha.push(6);
  }).toThrowError("Overflow");
});

test("Underflow", () => {
  expect(() => {
    pilha.pop();
  }).toThrowError("Underflow");
});

test("Peek", () => {
  expect(() => {
    pilha.peek();
  }).toThrowError("Stack is empty");
  pilha.push(0);
  pilha.push(1);
  pilha.push(2);
  expect(pilha.peek()).toBe(2);
  // console.log(pilha.print());
});