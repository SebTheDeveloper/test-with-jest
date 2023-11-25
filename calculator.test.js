const calculator = require("./calculator");

it("returns an object", () => {
  expect(typeof calculator).toBe("object");
});

it("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it("subtracts two numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

it("divides two numbers", () => {
  expect(calculator.divide(100, 2)).toBe(50);
});

it("multiplies two numbers", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});
