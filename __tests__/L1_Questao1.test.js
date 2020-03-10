import Fraction from "../src/Lista_1/Questao1";

let frac1;
let frac2;

beforeEach(() => {
  frac1 = new Fraction(1, 2);
  frac2 = new Fraction(2, 2);
});

test("Fraction division", () => {
  expect(frac1.divisao(frac2).toString()).toBe("2/4");
});

test("Fraction multiplication", () => {
  expect(frac1.multi(frac2).toString()).toBe("2/4");
});

test("Division for zero", () => {
  expect(() => {
    let f = new Fracao(4, 0);
    frac.divisao(f);
  }).toThrowError("The denominator cannot be zero");
});
