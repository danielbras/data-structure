import Queue2Stack from "../src/Lista_1/Questao4";

let queue;

beforeEach(() => {
	queue = new Queue2Stack(5);
});

test("Instanciacao", () => {
	expect(queue.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	queue.enqueue(5);
	expect(queue.size()).toBe(1);
	expect(queue.front()).toBe(5);
});

test("Teste de overflow", () => {
	queue.enqueue(5);
	queue.enqueue(5);
	queue.enqueue(5);
	queue.enqueue(5);
	queue.enqueue(5);
	expect(() => {
		queue.enqueue(5);
	}).toThrowError();
});

test("Teste de underflow", () => {
	expect(() => {
		queue.dequeue();
	}).toThrowError()
})

test("Teste de comportamento", () => {
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.enqueue(4);
	queue.enqueue(5);
	expect(queue.dequeue()).toBe(1);
});

test("Teste de clear", () => {
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.enqueue(4);
	queue.enqueue(5);
	queue.clear();
	expect(() => {
		queue.dequeue();
	}).toThrowError()
});

test("Teste de size após o clear", () => {
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.enqueue(4);
	queue.enqueue(5);
	queue.clear();
	expect(queue.size()).toBe(0);
});

test("fila aula", () => {
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
	expect(() => {
		queue.enqueue("F");
	}).toThrowError();
	expect(queue.dequeue()).toBe("A");
	expect(queue.dequeue()).toBe("B");
	expect(queue.dequeue()).toBe("C");
	expect(queue.dequeue()).toBe("D");
	expect(queue.dequeue()).toBe("E");
	expect(() => {
		queue.dequeue();
	}).toThrowError();
	expect(queue.size()).toBe(0);
});