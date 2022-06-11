const longestPalindrome = require("./index");

test("input: [babad] should be return [bab]", () => {
  const input = "babad";
  const expectResult = "aba";

  expect(longestPalindrome(input)).toEqual(expectResult);
});

test("input: [cbbd] should be return [bb]", () => {
  const input = "cbbd";
  const expectResult = "bb";

  expect(longestPalindrome(input)).toEqual(expectResult);
});

test("input: [bbgghh] should be return [bbgghh]", () => {
  const input = "bbgghh";
  const expectResult = "bbgghh";

  expect(longestPalindrome(input)).toEqual(expectResult);
});

test("input: [a] should be return [a]", () => {
  const input = "a";
  const expectResult = "a";

  expect(longestPalindrome(input)).toEqual(expectResult);
});

test("input: [aa] should be return [aa]", () => {
  const input = "aa";
  const expectResult = "aa";

  expect(longestPalindrome(input)).toEqual(expectResult);
});

test("input: [ac] should be return [ac]", () => {
  const input = "ac";
  const expectResult = "ac";

  expect(longestPalindrome(input)).toEqual(expectResult);
});
