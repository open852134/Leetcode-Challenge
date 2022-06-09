const removeDuplicates = require("./index");

test("input: [1,1,2] should be return length = 2", () => {
  const dataSource = [1, 1, 2];

  expect(removeDuplicates(dataSource)).toEqual(2);
});

test("input: [0,0,1,1,1,2,2,3,3,4] should be return length = 5", () => {
  const dataSource = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

  expect(removeDuplicates(dataSource)).toEqual(5);
});

test("input: [0,1,2,2,3,4,5,6,6,6] should be return length = 6", () => {
  const dataSource = [0, 1, 2, 2, 3, 4, 5, 6, 6, 6];

  expect(removeDuplicates(dataSource)).toEqual(6);
});
