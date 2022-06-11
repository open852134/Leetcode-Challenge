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
var mergeTwoLists = function(l1, l2) {
  var result = sortedMerge(l1, l2);
  return result;
};

var sortedMerge = function(a, b) {
  var result = null;
  /* Base cases */
  if (a == null) return b;
  if (b == null) return a;

  /* Pick either a or b, and recur */
  if (a.val <= b.val) {
    result = a;
    result.next = sortedMerge(a.next, b);
  } else {
    result = b;
    result.next = sortedMerge(a, b.next);
  }
  return result;
};

module.exports = mergeTwoLists;
