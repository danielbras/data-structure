/**
 * Implementação de conversor decimal para binário
 * @author {https://github.com/taniro}
 */

import Pilha from '../Pilha';

export default function toBin(decimal) {
  let aux;
  let result = '';

  for (aux = new Pilha(10); decimal > 0; decimal = Math.floor(decimal / 2)) {
    aux.push(decimal % 2);
  }
  while (aux.size() > 0) {
    result += `${aux.pop()}`;
  }
  return result;
}
