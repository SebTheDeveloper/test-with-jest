const analyzeArray = require("./analyzeArray");

const testDataSet = [1, 8, 3, 4, 2, 6];

it("returns an object", () => {
  expect(typeof analyzeArray(testDataSet)).toBe("object");
});

it("gets the average", () => {
  expect(analyzeArray(testDataSet).average).toBe(4);
});

it("gets the length", () => {
  expect(analyzeArray(testDataSet).length).toBe(6);
});

it("calculates the max number", () => {
  expect(analyzeArray(testDataSet).max).toBe(8);
});

it("calculates the min number", () => {
  expect(analyzeArray(testDataSet).min).toBe(1);
});
