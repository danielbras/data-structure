import ListaPessoas from "../src/Lista_2/Questao9";

let list;

beforeEach(() => list = new ListaPessoas());

test("Sort people by age", () => {
    list.addPeople("Daniel", 19);
    list.addPeople("Fredy", 2);
    list.addPeople("Bob", 20);
    list.addPeople("Carlos", 50);
    list.addPeople("Taniro", 30);
    list.addPeople("Alyson", 21);
    // console.log(list.toString());
    expect(list.sortByAge().toString()).toBe("Fredy 2->Daniel 19->Bob 20->Alyson 21->Taniro 30->Carlos 50");
});

test("Sort people by name", () => {
    list.addPeople("Daniel", 19);
    list.addPeople("Fredy", 2);
    list.addPeople("Lee", 90);
    list.addPeople("Chan", 100);
    list.addPeople("Bob", 20);
    list.addPeople("Carlos", 50);
    list.addPeople("Taniro", 30);
    list.addPeople("Alyson", 21);
    // console.log(list.toString());
    expect(list.sortByName().toString()).toBe("Alyson 21->Bob 20->Carlos 50->Chan 100->Daniel 19->Fredy 2->Lee 90->Taniro 30");
});