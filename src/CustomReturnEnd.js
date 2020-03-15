export default function returnCustom(list) {
    let previous = list.head;
    let current = list.head.next;

    while (current !== null) {
        previous = current;
        current = current.next;
    }
    return previous.data;
}