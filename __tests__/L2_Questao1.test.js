import Stack from "../src/Lista_2/Questao1";

let stack;

beforeEach(() => stack = new Stack());

test("Last In First Out - basic operations", () => {
  stack.push(69);
  stack.push(15);
  stack.push(25);
  stack.push(10);
  stack.push(90);
  expect(stack.pop()).toBe(90);
  expect(stack.size()).toBe(4);
  expect(stack.peek()).toBe(10);
});

test("Underflow", () => {
  expect(() => {
    stack.pop();
  }).toThrowError("Underflow");
});

test("Peek", () => {
  stack.push(0);
  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
});

test("Clear test", () => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  expect(stack.size()).toBe(6);
  stack.clear();
  expect(stack.size()).toBe(0);
})