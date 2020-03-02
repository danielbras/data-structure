import Stack from '../src/Stack'

let stack

beforeEach(() => {
    stack = new Stack(5)
})

test("Instatiation", () => {
    expect(stack.size()).toBe(0)
})

test("Last In First Out", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    expect(stack.pop()).toBe(5)
})

test("Stack clean", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.clear()
    stack.push(5)
    expect(stack.size()).toBe(1)
})

test("Overflow", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    expect(() => {
        stack.push(6);
    }).toThrowError("Overflow")
})

test("Underflow", () => {
    expect(() => {
        stack.pop()
    }).toThrowError("Underflow")
})

test("Peek", () => {
    expect(() => {
        stack.peek()
    }).toThrowError("Stack is empty")
    stack.push(0)
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)

})