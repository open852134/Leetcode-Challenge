const closeStrings = require("./index");

describe("closeStrings", () => {
  test(`word1 = 'cabbba', word2 = 'abbccc' should return true`, () => {
    const word1 = "cabbba";
    const word2 = "abbccc";

    const result = closeStrings(word1, word2);

    expect(result).toEqual(true);
  });
});
