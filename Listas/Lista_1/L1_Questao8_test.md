# Arquivo de teste da questão 8

```
import verifyExpression from "../src/Lista_1/Questao8";

test("", () => {
	expect(verifyExpression("[()[()]]()")).toBe(true);
	expect(verifyExpression("( ( ) ]")).toBe(false);
});
```