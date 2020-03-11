import Lista from "../src/Lista";
import inverterOrdem from "../src/Lista_2/Questao4";

let lista;

beforeEach(() => lista = new Lista());

test("Inverts the order of the list elements", () => {
    expect(() => {
        inverterOrdem(lista);
    }).toThrowError("List is empty");
    lista.append(1);
    expect(inverterOrdem(lista).toString()).toBe("1");
    lista.append(2);
    lista.append(3);
    lista.append(4);
    lista.append(5);
    expect(inverterOrdem(lista).toString()).toBe("5->4->3->2->1");
    lista.add(10);
    lista.add(20);
    lista.add(30);
    lista.add(40);
    lista.add(50);
    expect(inverterOrdem(lista).toString()).toBe("1->2->3->4->5->10->20->30->40->50");
});
