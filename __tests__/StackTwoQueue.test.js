import Stack2Queue from "../src/Lista01/StackTwoQueue";

let stack;

beforeEach(() => {
  stack = new Stack2Queue(5);
});

test("Overflow", () => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  expect(() => {
    stack.push(10);
  }).toThrowError("Stack overflow");
});

test("Underflow", () => {
  expect(() => {
    stack.pop();
  }).toThrowError("Stack underflow");
});

test("operation of stack with two queue", () => {
  stack.push(1);
  expect(stack.peek()).toBe(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
  stack.push(3);
  expect(stack.peek()).toBe(3);
  stack.push(4);
  stack.push(5);
  expect(stack.peek()).toBe(5);
});
