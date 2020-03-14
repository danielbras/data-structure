import List from "../src/Lista";
import DoublyLinkedList from "../src/Lista_2/Questao8";

let list;

beforeEach(() => list = new List());

test("Copy values to doubly linked list", () => {
    list.append(1);
    list.append(2);
    list.append("three");
    list.append(4);
    list.append(5);
    let doublyList = new DoublyLinkedList(list);
    expect(doublyList.toString()).toBe("1->2->three->4->5");
    expect(doublyList.head.data).toBe(1);
    expect(doublyList.tail.data).toBe(5);
});