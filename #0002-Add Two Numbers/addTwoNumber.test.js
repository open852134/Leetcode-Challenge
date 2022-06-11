const { addTwoNumbers, ListNode } = require("./addTwoNumber");

describe("addTwoNumbers", () => {
  test("input: [0], [0] should be return [0]", () => {
    const result = addTwoNumbers([0], [0]);

    const expectResult = new ListNode(0);

    expect(result).toEqual(expectResult);
  });

  test("input: [2, 4, 3], [5, 6, 4] should be return [7, 0, 8]", () => {
    const result = addTwoNumbers([2, 4, 3], [5, 6, 4]);

    const expectResult = new ListNode(7, new ListNode(0, new ListNode(8)));

    expect(result).toEqual(expectResult);
  });

  test("input: [2, 4, 3, 5], [5, 6, 4] should be return [7, 0, 8, 5]", () => {
    const result = addTwoNumbers([2, 4, 3, 5], [5, 6, 4]);

    const expectResult = new ListNode(7, new ListNode(0, new ListNode(8, new ListNode(5))));

    expect(result).toEqual(expectResult);
  });

  test("input: [9,9,9,9,9,9,9], [9,9,9,9] should be return [8,9,9,9,0,0,0,1]", () => {
    const result = addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

    const expectResult = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))
        )
      )
    );

    expect(result).toEqual(expectResult);
  });
});
