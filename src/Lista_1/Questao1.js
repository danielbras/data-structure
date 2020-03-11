
export default class Fracao {
  constructor(numerador, denominador) {
    if (denominador === 0) {
      throw new Error("O denominador não pode ser zero");
    }
    this.numerador = numerador;
    this.denominador = denominador;
  }

  divisao(fracao) {
    return new Fracao(this.numerador * fracao.numerador, this.denominador * fracao.denominador);
  }
  
  multiplicacao(fracao) {
    return new Fracao(this.numerador * fracao.denominador, this.denominador * fracao.numerador);
  }

  toString() {
    return `${this.numerador}/${this.denominador}`;
  }

}
