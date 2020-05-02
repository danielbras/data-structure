import safePosition from "../src/Lista_2/Questao7";

test("What is the safe position", () => {
    // Quando a quantidade de soldados é igual a uma potência de 2
    // e o intervalo entre a morte é 1, o resultado sempre será 1;
    expect(safePosition(1, 2)).toBe(1);
    expect(safePosition(1, 4)).toBe(1);
    expect(safePosition(1, 8)).toBe(1);
    expect(safePosition(1, 16)).toBe(1);
    // Testes aleatórios
    expect(safePosition(3, 10)).toBe(5);
    expect(safePosition(1, 3)).toBe(3);
    expect(safePosition(2, 3)).toBe(2);
    expect(safePosition(1, 7)).toBe(7);
})