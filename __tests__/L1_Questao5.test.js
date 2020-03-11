import DecToBin from "../src/Lista_1/Questao5";

test("Decimal to binary converter", () => {
	expect(DecToBin(14)).toBe("1110");
	expect(DecToBin(7)).toBe("111");
	expect(DecToBin(2)).toBe("10");
	expect(DecToBin(1)).toBe("1");
});