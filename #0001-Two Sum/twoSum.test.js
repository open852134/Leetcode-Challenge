const twoSum = require("./index");

test("input: { [3, 2, 4], 6 } should be return [1, 2]", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("input: { [2, 7, 11, 15], 9 } should be return [0, 1]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("input: { [-3, 4, 3, 90], 0 } should be return [0, 2]", () => {
  expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
});
