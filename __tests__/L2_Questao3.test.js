import ArrayList from "../src/Lista_2/Questao3";

let arrayList;

beforeEach(() => arrayList = new ArrayList());

test("Instanciacão", () => {
    expect(arrayList.size()).toBe(0);
    expect(arrayList.isEmpty()).toBe(true);
  });

// Mesmo teste da lista com nó
test("Adicionar em arrayListugares variados", () => {
    arrayList.add(1);
    arrayList.add(2);
    arrayList.add(3);
    arrayList.add(4);
    expect(arrayList.size()).toBe(4);
    expect(arrayList.toString()).toBe("4->3->2->1");
    arrayList.append(5);
    expect(arrayList.toString()).toBe("4->3->2->1->5");
    arrayList.removeBeginning();
    expect(arrayList.toString()).toBe("3->2->1->5");
    arrayList.removeEnd();
    expect(arrayList.toString()).toBe("3->2->1");
    expect(arrayList.size()).toBe(3);
    arrayList.addAt(1, 6);
    expect(arrayList.toString()).toBe("3->6->2->1");
    expect(arrayList.search(5)).toBe(false);
    expect(arrayList.search(6)).toBe(true);
  });
  