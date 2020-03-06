import Deque from "../src/Lista01/Questao6";

let deque2End;

beforeEach(() => {
    deque2End = new Deque();
});

test("Add elements in outset", () => {
    deque2End.inserirInicio(1);
    deque2End.inserirInicio(2);
    deque2End.inserirInicio(3);
    deque2End.inserirInicio(4);
    deque2End.inserirInicio(5);
    expect(deque2End.toString()).toBe("[54321]");
});

test("Add elements in end", () => {
    deque2End.inserirFim(1);
    deque2End.inserirFim(2);
    deque2End.inserirFim(3);
    deque2End.inserirFim(4);
    deque2End.inserirFim(5);
    expect(deque2End.toString()).not.toBe("[54321]");
})

test("Remove elements of outset", () => {
    deque2End.inserirInicio(1);
    deque2End.inserirInicio(2);
    deque2End.inserirInicio(3);
    deque2End.removerInicio();
    deque2End.removerInicio();
    expect(deque2End.size()).toBe(1);
})

test("Remove elements of end", () => {
    deque2End.inserirFim(5);
    deque2End.inserirFim(4);
    deque2End.inserirFim(3);
    deque2End.inserirFim(2);
    deque2End.removerFim();
    expect(deque2End.toString()).toBe("[543]")
})