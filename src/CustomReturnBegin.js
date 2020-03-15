export default function customRemoveBeginning() {
    if (this.isEmpty()) {
        throw new Error();
    } else {
        let aux = this.head.next;
        this.head.next = aux.next;
        return aux.data;
    }
}