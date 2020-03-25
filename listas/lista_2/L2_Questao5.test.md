import List from "../src/Lista";
import shuffleOrder from "../src/Lista_2/Questao5";

let list;

beforeEach(() => list = new List());

test("Shuffle the order of the list elements", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    expect(shuffleOrder(list).toString()).not.toBe("1->2->3->4");
    list.append(90);
    list.append(50);
    list.append(30);
    list.append(45);
    expect(shuffleOrder(list).toString()).not.toBe("45->30->50->90->1->2->3->4");
})