import Stack from "../src/Lista01/InverteTopBase";

let stack;

beforeEach(() => {
  stack = new Stack(5);
});

test("Change the element of top with the base", () => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  expect(stack.change().print()).toBe("[ 5, 2, 3, 4, 1 ]");
});

test("Try to change the top and base of an empty stack", () => {
  expect(() => {
    stack.change();
  }).toThrowError("Stack is empty");
});
