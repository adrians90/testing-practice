const { caesarCipher } = require("../scripts/caesarCipher.js")

test("wraps from z to a", () => {
    expect(caesarCipher("Z", 2)).toEqual("B")
})



test("works with punctuation", () => {
    expect(caesarCipher("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!")
})