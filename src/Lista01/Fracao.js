export default class Fracao {
  constructor(nume, deno) {
    if (deno == 0) {
      throw new Error("O denomidador não pode ser zero");
    }
    this.numerador = nume;
    this.denominador = deno;
  }

  divisao(fracao) {
    let a = this.numerador * fracao.numerador;
    let b = this.denominador * fracao.denominador;
    return new Fracao(a, b);
  }

  toString() {
    return `${this.numerador}/${this.denominador}`;
  }

  multi(nume, deno) {
    let a = this.numerador * deno;
    let b = thwis.denominador * nume;
    return new Fracao(a, b);
  }
}
