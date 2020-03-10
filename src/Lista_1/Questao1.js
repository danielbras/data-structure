
export default class Fracao {
  constructor(numerador, denominador) {
    if (deno === 0) {
      throw new Error("The denominator cannot be zero");
    }
    this.numerador = numerador;
    this.denominador = denominador;
  }

  divisao(fracao) {
    return new Fracao(this.numerador * fracao.numerador, this.denominador * fracao.denominador);
  }
  
  multi(fracao) {
    return new Fracao(this.numerador * fracao.denominador, this.denominador * fracao.numerador);
  }

  toString() {
    return `${this.numerador}/${this.denominador}`;
  }

}
