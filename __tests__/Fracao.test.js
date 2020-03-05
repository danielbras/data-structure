import Fraction from "../src/Lista01/Fracao";

let frac1;
let frac2;

beforeEach(() => {
  frac1 = new Fraction(1, 2);
  frac2 = new Fraction(2, 2);
});

test("Fraction division", () => {
  expect(fracao.divisao(fracao2).toString()).toBe("2/4");
});

test("Fraction multiplication", () => {
  expect(fracao.divisao(fracao2).toString()).toBe("2/4");
});

test("Division for zero", () => {
  expect(() => {
    let f = new Fracao(4, 0);
    fracao.divisao(f);
  }).toThrowError("The denominator cannot be zero");
});
