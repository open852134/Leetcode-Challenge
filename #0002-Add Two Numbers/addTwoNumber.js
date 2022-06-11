/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let head = result;
  let carry = 0;

  while (l1.length > 0 || l2.length > 0 || carry > 0) {
    let _head = head;

    const num1 = l1.shift() || 0;
    const num2 = l2.shift() || 0;
    const sum = num1 + num2 + carry;
    const node = new ListNode(sum - 10 >= 0 ? sum - 10 : sum);
    carry = sum - 10 >= 0 ? 1 : 0;

    _head.next = node;
    head = node;
  }

  return result.next;
};

module.exports = { addTwoNumbers, ListNode };
