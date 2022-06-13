const lengthOfLongestSubstring = require("./lengthOfLongestSubstring");

describe("lengthOfLongestSubstring", () => {
  test("input string `abcabcbb` should be return 3", () => {
    const result = lengthOfLongestSubstring("abcabcbb");

    expect(result).toEqual(3);
  });

  test("input string ` ` should be return 1", () => {
    const result = lengthOfLongestSubstring(" ");

    expect(result).toEqual(1);
  });

  test("input string `au` should be return 1", () => {
    const result = lengthOfLongestSubstring("au");

    expect(result).toEqual(2);
  });

  test("input string `pwwkew` should be return 1", () => {
    const result = lengthOfLongestSubstring("pwwkew");

    expect(result).toEqual(3);
  });
});
