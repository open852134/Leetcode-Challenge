const productExceptSelf = require("./productExceptSelf");

describe("productExceptSelf", () => {
  test("nums [1,2,3,4] should return [24,12,8,6] ", () => {
    const result = productExceptSelf([1, 2, 3, 4]);

    expect(result).toEqual([24, 12, 8, 6]);
  });

  test("nums [-1,1,0,-3,3] should return [0,0,9,0,0] ", () => {
    const result = productExceptSelf([-1, 1, 0, -3, 3]);

    expect(result).toEqual([0, 0, 9, 0, 0]);
  });
});
