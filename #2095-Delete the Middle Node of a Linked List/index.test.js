const deleteMiddle = require("./index");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function CreateLists(arr) {
  if (arr.length === 0) return null; // Return null for an empty array

  let head = new ListNode(arr[0]); // Create the head node
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]); // Link new node
    current = current.next;
  }

  return head; // Return the head of the linked list
}

// Function to print the linked list
function convertToArray(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe("deleteMiddle", () => {
  test("[1,3,4,7,1,2,6] should return [1,3,4,1,2,6]", () => {
    const input = CreateLists([1, 3, 4, 7, 1, 2, 6]);
    const expectResult = [1, 3, 4, 1, 2, 6];

    const result = deleteMiddle(input);

    expect(convertToArray(result)).toEqual(expectResult);
  });

  test("[1,2,3,4] should return [1,2,4]", () => {
    const input = CreateLists([1, 2, 3, 4]);
    const expectResult = [1, 2, 4];

    const result = deleteMiddle(input);

    expect(convertToArray(result)).toEqual(expectResult);
  });

  test("[1,2] should return [1]", () => {
    const input = CreateLists([1, 2]);
    const expectResult = [1];

    const result = deleteMiddle(input);

    expect(convertToArray(result)).toEqual(expectResult);
  });

  test("[1] should return []", () => {
    const input = CreateLists([1]);
    const expectResult = [];

    const result = deleteMiddle(input);

    expect(convertToArray(result)).toEqual(expectResult);
  });
});
