import Stack from "../Pilha";

export default function reverseTopBase(stack) {
	let auxStack = new Stack(stack.maxSize);
	let finalStack = new Stack(stack.maxSize);

	if (stack.size() <= 1) {
		return stack;
	} else {
		finalStack.push(stack.pop());
		while (stack.size() > 1) {
			auxStack.push(stack.pop());
		}
		while (auxStack.size() > 0) {
			finalStack.push(auxStackx.pop());
		}
		finalStack.push(stack.pop());
	}

	return finalStack;
}