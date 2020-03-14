import List from "../src/Lista_2/Questao6";

let list;

beforeEach(() => list = new List());

test("return characters from posA to posB", () => {
    list.append("daniel");
    expect(list.substring(2,5)).toBe("n->i->e->l");
    list.add("c");
    list.add("a");
    list.add("r");
    list.add("l");
    list.add("o");
    list.add("s");
    expect(list.substring(0,5)).toBe("s->o->l->r->a->c");

})