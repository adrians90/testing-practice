const { reverseString } = require("../scripts/reverseString.js")

test("returns a reversed string", () => {
    expect(reverseString("adrian")).toBe("nairda")
})