import List from "../Lista";

export default function inverterOrder(list) {
    if(list.isEmpty()){
        throw new Error("List is empty");
    }
    
    let auxList = new List();
    let previous, current;

    while (!list.isEmpty()) {
        previous = list.head;
        current = list.head.proximo;

        while (current !== null) {
            previous = current;
            current = current.proximo;
        }
        auxList.append(previous.data);
        list.removeEnd();
    }

    // Preencher list principal com os elementos em outra ordem
    while (!auxList.isEmpty()) {
        previous = auxList.head;
        current = auxList.head.proximo;

        while (current !== null) {
            previous = current;
            current = current.proximo;
        }
        list.add(previous.data);
        auxList.removeEnd();
    }
    
    return list;
}