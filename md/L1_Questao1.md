import Fracao from "../src/Lista_1/Questao1";

let frac1;
let frac2;

beforeEach(() => {
  frac1 = new Fracao(1, 2);
  frac2 = new Fracao(2, 2);
});

test("Fraction division", () => {
  expect(frac1.divisao(frac2).toString()).toBe("2/4");
});

test("Fraction multiplication", () => {
  expect(frac1.multiplicacao(frac2).toString()).toBe("2/4");
});

test("Division for zero", () => {
  expect(() => {
    let fracao = new Fracao(4, 0);
    frac1.divisao(fracao);
  }).toThrowError("O denominador não pode ser zero");
});
