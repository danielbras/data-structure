import AnalyzeBracket from "../src/Lista01/Questao8";

let text;

test("Parses the string sequence", () => {
    text = new AnalyzeBracket("(()]");
    expect(text.parseBracket()).toBe("mal formada");
})

test("Sequence of parentheses and bracket", () => {
    text = new AnalyzeBracket("]]]))");
    expect(() => {
        text.parseBracket();
    }).toThrowError("Não possue bracket de abertura");
});

test("With lyrics", () => {
    text = new AnalyzeBracket("[(carlos)]");
    expect(text.parseBracket()).toBe("bem-formada");
});

test("Valid sequence", () => {
    text = new AnalyzeBracket("[()[()]]()");    
    expect(text.parseBracket()).toBe("bem-formada");
});