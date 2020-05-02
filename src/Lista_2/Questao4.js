import List from '../Lista';
import customReturnEnd from '../CustomReturnEnd';

export default function inverterOrder(list) {
  let result = new List();

  while (!list.isEmpty()) {
    result.append(customReturnEnd(list));
    list.removeEnd();
  }
  return result;
}
