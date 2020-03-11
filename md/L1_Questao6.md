import Deque from "../src/Lista_1/Questao6";

let deque;

beforeEach(() => {
	deque = new Deque(5);
});

test("Testing the operations of deque", () => {
	deque.insereInicio('A');
	deque.insereInicio('B');
	deque.insereInicio('C');
	deque.insereFim('D');
	expect(deque.removeInicio()).toBe('C');
	expect(deque.removeInicio()).toBe('B');
	expect(deque.removeFim()).toBe('D');
	expect(deque.removeFim()).toBe('A');
	expect(() => {
		deque.removeFim();
	}).toThrowError();
	deque.insereInicio('F');
	expect(deque.removeFim()).toBe('F');
});