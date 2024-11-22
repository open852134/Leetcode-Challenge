const decodeString = require("./decodeString");

describe("decodeString", () => {
  test("input '3[a]2[bc]' should return aaabcbc", () => {
    const result = decodeString("3[a]2[bc]");

    expect(result).toEqual("aaabcbc");
  });

  test("input '3[a2[c]]' should return accaccacc", () => {
    const result = decodeString("3[a2[c]]");

    expect(result).toEqual("accaccacc");
  });

  test("input '2[abc]3[cd]ef' should return abcabccdcdcdef", () => {
    const result = decodeString("2[abc]3[cd]ef");

    expect(result).toEqual("abcabccdcdcdef");
  });

  test("input '100[leetcode]' should return leetcodeleetcode... * 100", () => {
    const result = decodeString("100[leetcode]");

    expect(result).toEqual(
      "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode"
    );
  });

  test("input 'as2[abc]3[cd]ef' should return asabcabccdcdcdef", () => {
    const result = decodeString("as2[abc]3[cd]ef");

    expect(result).toEqual("asabcabccdcdcdef");
  });

  test("input 's2[aa3[vv3[xo]zzp]s]' should return asabcabccdcdcdef", () => {
    const result = decodeString("s2[aa3[vv3[xo]zzp]s]");

    expect(result).toEqual(
      "saavvxoxoxozzpvvxoxoxozzpvvxoxoxozzpsaavvxoxoxozzpvvxoxoxozzpvvxoxoxozzps"
    );
  });

  test("input '2[4]' should return asabcabccdcdcdef", () => {
    const result = decodeString("2[4]");

    expect(result).toEqual("");
  });
});
