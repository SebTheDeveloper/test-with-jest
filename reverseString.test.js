const reverseString = require("./reverseString");

it("is a function", () => {
  expect(typeof reverseString).toBe("function");
});

it("returns string with first letter reverseStringd", () => {
  expect(reverseString("hello")).toBe("olleh");
});