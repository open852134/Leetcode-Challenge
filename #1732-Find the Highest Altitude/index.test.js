const largestAltitude = require("./index");

describe("largestAltitude", () => {
  test("input [-5,1,5,0,-7] should return 1 ", () => {
    const input = [-5, 1, 5, 0, -7];
    const expectResult = 1;

    const result = largestAltitude(input);
    expect(result).toEqual(expectResult);
  });

  test("input [-4,-3,-2,-1,4,3,2] should return 1 ", () => {
    const input = [-4, -3, -2, -1, 4, 3, 2];
    const expectResult = 0;

    const result = largestAltitude(input);
    expect(result).toEqual(expectResult);
  });
});
