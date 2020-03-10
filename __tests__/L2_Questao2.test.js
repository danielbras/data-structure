import Fila from "../src/Lista_2/Questao2";

let fila;

beforeEach(() => fila = new Fila());

test("Append data in queue", () => {
    fila.enqueue(10);
    expect(fila.size()).toBe(1);
    fila.enqueue(45);
    expect(fila.front()).toBe(10);
    fila.enqueue(20);
    fila.enqueue(40);
    fila.enqueue(220);
    expect(fila.size()).toBe(5);
});

test("Queue is empty", () => {
    expect(() => {
        fila.dequeue();
    }).toThrowError("The queue is empty");
    fila.enqueue(100);
    fila.enqueue(75);
    fila.enqueue(50);
    fila.enqueue(25);
    fila.enqueue(5);
    expect(fila.size()).toBe(5);
    fila.clear();
    expect(fila.size()).toBe(0);
    fila.enqueue(0);
    fila.dequeue();
    expect(() => {
        fila.dequeue();
    }).toThrowError("The queue is empty");
});

test("Queue test example", () => {
    expect(fila.size()).toBe(0);
    fila.enqueue("A");
    expect(fila.size()).toBe(1);
    expect(fila.front()).toBe("A");
    fila.enqueue("B");
    expect(fila.front()).toBe("A");
    expect(fila.size()).toBe(2);
    fila.enqueue("C");
    fila.enqueue("D");
    fila.enqueue("E");
    expect(fila.dequeue()).toBe("A");
    expect(fila.dequeue()).toBe("B");
    expect(fila.dequeue()).toBe("C");
    expect(fila.dequeue()).toBe("D");
    expect(fila.dequeue()).toBe("E");
    expect(() => {
      fila.dequeue();
    }).toThrowError("The queue is empty");
    expect(fila.size()).toBe(0);
  });
  