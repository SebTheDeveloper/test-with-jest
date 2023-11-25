const capitalize = require("./capitalize");

it("is a function", () => {
  expect(typeof capitalize).toBe("function");
});

it("returns string with first letter capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

it("returns string with only the first letter capitalized", () => {
  expect(capitalize("hElLo")).toBe("Hello");
});
