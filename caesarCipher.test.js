const caesarCipher = require("./caesarCipher");

it("is a function", () => {
  expect(typeof caesarCipher).toBe("function");
});

it("correctly ciphers text by shift key value", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

it("correctly wraps at end of alphabet", () => {
  expect(caesarCipher("wxyz", 2)).toBe("yzab");
});

it("preserves case", () => {
  expect(caesarCipher("aBc", 2)).toBe("cDe");
});

it("handles spaces", () => {
  expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
});
