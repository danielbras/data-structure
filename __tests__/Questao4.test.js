import Queue2Stack from "../src/Lista01/Questao4";

let queue;

beforeEach(() => {
  queue = new Queue2Stack(5);
});

test("Queue full", () => {
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  expect(() => {
    queue.enqueue(10);
  }).toThrowError("Queue is full");
});

test("Queue empty", () => {
  expect(() => {
    queue.dequeue();
  }).toThrowError("Queue is empty");
});

test("Fisrt In First Out", () => {
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.dequeue()).toBe(3);
});

test("operation of queue with two stacks", () => {
  queue.enqueue(1);
  expect(queue.front()).toBe(1);
  queue.dequeue();
  queue.enqueue(2);
  expect(queue.front()).toBe(2);
  queue.dequeue();
  queue.enqueue(3);
  expect(queue.front()).toBe(3);
  queue.dequeue();
  queue.enqueue(4);
  expect(queue.front()).toBe(4);
});
