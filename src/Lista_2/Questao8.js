import ListaDuplamenteLigada from "../ListaDuplamenteLigada";

export default class DualList {
    constructor(simpleList) {
        this.duallist = new ListaDuplamenteLigada();
        this.list = simpleList;
    }
    
    copyValues() {
        let previous;
        let current;

        while (!this.list.isEmpty()) {
            previous = this.list.head;
            current = this.list.head.next;
            while (current !== null) {
                previous = current;
                current = current.next;
            }
            this.duallist.add(previous.data);
            this.list.removeEnd();
        }
        return this.duallist;
    }
}