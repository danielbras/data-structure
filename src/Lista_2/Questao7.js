import DoublyList from "../ListaDuplamenteLigada";

export default function safePosition(removeIn = 0, numberSoldiers = 0) {
    let list = new DoublyList();
    let deathIndex = 1;
    let aux;

    if(numberSoldiers == 0) {
        return 0;
    } 
    
    for (let i = 1; i <= numberSoldiers; i++) {
        list.append(i);
    }
    
    if (removeIn == 0){
        return list;
    }
    
    aux = list.head;
    while (list.size() != 1) {
        aux = aux.next;
        if (aux === null) {
            aux = list.head;
        }
        if (deathIndex++ === removeIn){
            list.remove(aux.data);
            deathIndex = 0;
        }
    }
    return list.head.data;
}