import Pilha from '../Pilha'

export default function verifyExpression(string) {
	let auxStack = new Pilha(20);

	for (let i = 0; i < string.length; i++) {
		if (string[i] === '[' || string[i] === '(') {
			auxStack.push(string[i]);
		} else if (string[i] === ']' || string[i] === ')') {
			let getElement = auxStack.pop();
			if ((getElement === '(' && string[i] !== ')') || (getElement === '[' && string[i] !== ']')) return false;
		}
	}

	return auxStack.isEmpty();
}