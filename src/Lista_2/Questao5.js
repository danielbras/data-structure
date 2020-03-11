import List from "../Lista";

export default function shuffleOrder(list) {
    let auxList = new List();

    while (!list.isEmpty()) {
        auxList.append(getLastElement(list));
        list.removeEnd();
    }
    while (!auxList.isEmpty()) {
        // Adicionando elementos em posições aleatórias da lista
        list.addAt(Math.floor(Math.random() * auxList.size()), getLastElement(auxList));
        auxList.removeEnd();
    }

    function getLastElement(list) {
        let previous = list.head;
        let current = list.head.next;

        while (current !== null) {
            previous = current;
            current = current.next;
        }
        return previous.data;
    }
    // console.log(list.toString());
    return list;
}