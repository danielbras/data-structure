# Arquivo de teste da questão 2

```
import Pilha from "../src/Pilha";
import reverseTopBase from "../src/Lista_1/Questao2";

let stack;

beforeEach(() => {
	stack = new Pilha(5);
});

test("Invert of stack top with the base", () => {
	stack.push(1);
	stack.push(2);
	stack.push(3);
	stack.push(4);
	stack.push(5);
	expect(stack.print()).toBe("[ 1  2  3  4  5 ]");
	expect(reverseTopBase(stack).print()).toBe("[ 5  2  3  4  1 ]");
});
```