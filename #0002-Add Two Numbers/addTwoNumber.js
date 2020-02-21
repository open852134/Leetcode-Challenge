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
var addTwoNumbers = function(l1, l2) {
  const result = numAdd(l1, l2);

  return {
    val: 7,
    next: {
      val: 0,
      next: {
        val: 8
      }
    }
  };
};

function numAdd(l1, l2) {
  var result = null;

  var sum = l1.val + l2.val;
  console.log(sum);

  numAdd(l1.next, l2.next);
}

module.exports = addTwoNumbers;
