const reverseWords = require("./reverseWords");

describe("reverseWords", () => {
  test("'the sky is blue' should return 'blue is sky the'", () => {
    const input = "the sky is blue";
    const result = reverseWords(input);

    expect(result).toBe("blue is sky the");
  });

  test("'  hello world  ' should return 'world hello'", () => {
    const input = "  hello world  ";
    const result = reverseWords(input);

    expect(result).toBe("world hello");
  });

  test("'a good   example' should return 'example good a'", () => {
    const input = "a good   example";
    const result = reverseWords(input);

    expect(result).toBe("example good a");
  });
});
