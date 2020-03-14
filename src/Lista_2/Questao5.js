import List from "../Lista"
import returnCustom from "../ReturnCustom";

export default function shuffleOrder(list) {
    let resultList = new List();

    while (!list.isEmpty()) {
        resultList.addAt(Math.floor(Math.random() * list.size()), returnCustom(list));
        list.removeEnd();
    }
    return resultList;
}