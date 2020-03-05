import Stack from "../src/Lista01/ReverseTopBase";

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
  // console.log(stack.print());
  stack.reverseTopBase();
  // console.log(stack.print());
  expect(stack.print()).toBe("[4 2 3 1]");

  
});

// test("Change the element of top with the base", () => {
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);
//   stack.push(4);
//   stack.push(5);
//   expect(() => {
//     stack.ReverseTopBase();
//   }).toBe("[5 2 3 4 1]");
// });

// test("Try to change the top and base of an empty stack", () => {
//   expect(() => {
//     stack.change();
//   }).toThrowError("Stack is empty");
// });

// test("Insert and delete of elements", () => {
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);
//   expect(stack.pop()).toBe(3);
//   stack.push(5);
//   stack.change();
//   expect(stack.pop()).toBe(1);
// });
