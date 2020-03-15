import List from "../Lista"
import customReturnEnd from "../CustomReturnEnd";

export default function shuffleOrder(list) {
    let resultList = new List();

    while (!list.isEmpty()) {
        resultList.addAt(Math.floor(Math.random() * list.size()), customReturnEnd(list));
        list.removeEnd();
    }
    return resultList;
}