const moveZeroes = require("./index");

describe("moveZeroes", () => {
  test("Input [0, 1, 0, 3, 12] should be return [1, 3, 12, 0, 0]", () => {
    const input = [0, 1, 0, 3, 12];
    const expectResult = [1, 3, 12, 0, 0];

    const result = moveZeroes(input);

    expect(result).toEqual(expectResult);
  });

  test("Input [0, 1] should be return [1, 0]", () => {
    const input = [0, 1];
    const expectResult = [1, 0];

    const result = moveZeroes(input);

    expect(result).toEqual(expectResult);
  });

  test("Input [0] should be return [0]", () => {
    const input = [0];
    const expectResult = [0];

    const result = moveZeroes(input);

    expect(result).toEqual(expectResult);
  });

  test("Input [2,4,6,8,0] should be return [2,4,6,8,0]", () => {
    const input = [2, 4, 6, 8, 0];
    const expectResult = [2, 4, 6, 8, 0];

    const result = moveZeroes(input);

    expect(result).toEqual(expectResult);
  });
});
