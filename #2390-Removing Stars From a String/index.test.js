const removeStars = require("./index");

describe("removeStars", () => {
  test("input: leet**cod*e should return lecoe", () => {
    const input = "leet**cod*e";
    const expectResult = "lecoe";
    const result = removeStars(input);

    expect(result).toEqual(expectResult);
  });

  test("input: erase***** should return '' ", () => {
    const input = "erase*****";
    const expectResult = "";
    const result = removeStars(input);

    expect(result).toEqual(expectResult);
  });
});
