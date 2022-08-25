const isValid = require("./index");

const case1 = "()";
const case2 = "[](){}";
const case3 = "[({})](){}";

const case4 = "(]";
const case5 = "((";

describe("function isValid", () => {
  test(`input is '${case1}' should return true`, () => {
    const result = isValid(case1);

    expect(result).toEqual(true);
  });

  test(`input is '${case2}' should return true`, () => {
    const result = isValid(case2);

    expect(result).toEqual(true);
  });

  test(`input is '${case3}' should return true`, () => {
    const result = isValid(case3);

    expect(result).toEqual(true);
  });

  test(`input is '${case4}' should return false`, () => {
    const result = isValid(case4);

    expect(result).toEqual(false);
  });

  test(`input is '${case5}' should return false`, () => {
    const result = isValid(case5);

    expect(result).toEqual(false);
  });
});
