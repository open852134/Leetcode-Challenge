const uniqueOccurrences = require("./index");

describe("uniqueOccurrences", () => {
  test("inout [1,2,2,1,1,3] should return true", () => {
    const input = [1, 2, 2, 1, 1, 3];
    const expectResult = true;

    const result = uniqueOccurrences(input);
    expect(result).toEqual(expectResult);
  });

  test("inout [1,2] should return false", () => {
    const input = [1, 2];
    const expectResult = false;

    const result = uniqueOccurrences(input);
    expect(result).toEqual(expectResult);
  });
});
