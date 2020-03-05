import Stack from "../src/Lista01/Questao2";

let stack;

beforeEach(() => {
  stack = new Stack(5);
});

test("Change the top with base", () => {
  expect(stack.size()).toBe(0);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.reverseTopBase();
  expect(stack.print()).toBe("[4 2 3 1]");
});
