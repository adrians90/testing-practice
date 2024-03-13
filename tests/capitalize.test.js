const { capitalize } = require("../scripts/capitalize.js")

test("returns a string with the first character capitalized", () => {
    expect(capitalize("testing")).toBe("Testing")
})