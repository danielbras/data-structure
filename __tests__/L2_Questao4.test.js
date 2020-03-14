import List from "../src/Lista";
import inverterOrder from "../src/Lista_2/Questao4";

let list;

beforeEach(() => list = new List());

test("Inverts the order of the list elements", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list = inverterOrder(list);
    expect(list.toString()).toBe("5->4->3->2->1");
    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);
    list.add(50);
    list = inverterOrder(list);
    expect(list.toString()).toBe("1->2->3->4->5->10->20->30->40->50");
});
