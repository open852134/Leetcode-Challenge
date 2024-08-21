const mergeAlternately = require("./mergeAlternately");

describe("mergeAlternately", () => {
  test("wod1: abc, word2: pqr, should return apbqcr", () => {
    const word1 = "abc";
    const word2 = "pqr";

    const result = mergeAlternately(word1, word2);

    expect(result).toEqual("apbqcr");
  });
  test("wod1: abc, word2: pqr, should return apbqcr", () => {
    const word1 = "ab";
    const word2 = "pqrs";

    const result = mergeAlternately(word1, word2);

    expect(result).toEqual("apbqrs");
  });

  test("wod1: abcd, word2: pq, should return apbqcd", () => {
    const word1 = "ab";
    const word2 = "pqrs";

    const result = mergeAlternately(word1, word2);

    expect(result).toEqual("apbqrs");
  });
});
