import Queue from "../src/Lista_2/Questao2"

let queue;

beforeEach(() => queue = new Queue());

test("Append data in queue", () => {
    queue.enqueue(10);
    expect(queue.size()).toBe(1);
    queue.enqueue(45);
    expect(queue.front()).toBe(10);
    queue.enqueue(20);
    queue.enqueue(40);
    queue.enqueue(220);
    expect(queue.size()).toBe(5);
});

test("Queue is empty", () => {
    expect(() => {
        queue.dequeue();
    }).toThrowError("The queue is empty");
    queue.enqueue(100);
    queue.enqueue(75);
    queue.enqueue(50);
    queue.enqueue(25);
    queue.enqueue(5);
    expect(queue.size()).toBe(5);
    queue.clear();
    expect(queue.size()).toBe(0);
    queue.enqueue(0);
    queue.dequeue();
    expect(() => {
        queue.dequeue();
    }).toThrowError("The queue is empty");
});

test("Queue test example", () => {
    expect(queue.size()).toBe(0);
    queue.enqueue("A");
    expect(queue.size()).toBe(1);
    expect(queue.front()).toBe("A");
    queue.enqueue("B");
    expect(queue.front()).toBe("A");
    expect(queue.size()).toBe(2);
    queue.enqueue("C");
    queue.enqueue("D");
    queue.enqueue("E");
    expect(queue.dequeue()).toBe("A");
    expect(queue.dequeue()).toBe("B");
    expect(queue.dequeue()).toBe("C");
    expect(queue.dequeue()).toBe("D");
    expect(queue.dequeue()).toBe("E");
    expect(() => {
      queue.dequeue();
    }).toThrowError("The queue is empty");
    expect(queue.size()).toBe(0);
  });
  