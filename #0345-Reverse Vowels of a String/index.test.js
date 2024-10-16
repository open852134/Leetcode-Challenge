const reverseVowels = require("./index");

describe("reverseVowels", () => {
  test("[IceCreAm] should be return [AceCreIm]", () => {
    const input = "IceCreAm";
    const expectResult = "AceCreIm";
    const result = reverseVowels(input);

    expect(result).toEqual(expectResult);
  });

  test("[leetcode] should be return [leotcede]", () => {
    const input = "leetcode";
    const expectResult = "leotcede";
    const result = reverseVowels(input);

    expect(result).toEqual(expectResult);
  });

  test("[OE] should be return [EO]", () => {
    const input = "OE";
    const expectResult = "EO";
    const result = reverseVowels(input);

    expect(result).toEqual(expectResult);
  });
});
