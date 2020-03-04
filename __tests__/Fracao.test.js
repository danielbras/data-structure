import Fracao from "../src/Lista01/Fracao";

let fracao;
let fracao2;

beforeEach(() => {
  fracao = new Fracao(1, 2);
  fracao2 = new Fracao(2, 2);
});

test("Divisao: ", () => {
  expect(fracao.divisao(fracao2).toString()).toBe("2/4");
});

test("Multiplicacao: ", () => {
  expect(fracao.divisao(fracao2).toString()).toBe("2/4");
});

test("Divisao por zero", () => {
  expect(() => {
    let f = new Fracao(4, 0);
    fracao.divisao(f);
  }).toThrowError("O denomidador não pode ser zero");
});
