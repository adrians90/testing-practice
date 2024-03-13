const { add, subtract, divide, multiply } = require("../scripts/calculator.js")

test("adds 1 + 2 to be 3", ()=> {
    expect(add(1,2)).toBe(3)
})

test("subtract 2 - 1 to be 1", ()=> {
    expect(subtract(2,1)).toBe(1)
})

test("divide 4 by 2 to be 2", ()=> {
    expect(divide(4,2)).toBe(2)
})

test("multiply 2 by 6 to be 12", ()=> {
    expect(multiply(2,6)).toBe(12)
})