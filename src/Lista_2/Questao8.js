import ListaDuplamenteLigada from '../ListaDuplamenteLigada';
import customReturnEnd from '../CustomReturnEnd';

export default function copyValues(simpleList) {
  let result = new ListaDuplamenteLigada();
  while (!simpleList.isEmpty()) {
    result.add(customReturnEnd(simpleList));
    simpleList.removeEnd();
  }
  return result;
}
