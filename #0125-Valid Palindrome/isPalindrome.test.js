const isPalindrome = require("./index");

describe("Valid Palindrome @0125", () => {
  test("input: [adasdasda] should be return false", () => {
    expect(isPalindrome("adasdasda")).toEqual(false);
  });

  test("input: [race a car] should be return false", () => {
    expect(isPalindrome("race a car")).toEqual(false);
  });

  test("input: [r] should be return true", () => {
    expect(isPalindrome("r")).toEqual(true);
  });

  test("input: [A man, a plan, a canal: Panama] should be return true", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  });

  test("input: [Aa] should be return true", () => {
    expect(isPalindrome("Aa")).toEqual(true);
  });

  test("input: [.] should be return true", () => {
    expect(isPalindrome(".")).toEqual(true);
  });

  test("input: [] should be return true", () => {
    expect(isPalindrome("")).toEqual(true);
  });

  test("input: [ ] should be return true", () => {
    expect(isPalindrome(" ")).toEqual(true);
  });
});
