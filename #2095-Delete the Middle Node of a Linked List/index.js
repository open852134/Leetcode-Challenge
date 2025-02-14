/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head == null || head.next === null) {
    return null;
  }

  const size = countNodes(head);
  const middleIndex = Math.floor(size / 2 + 1);

  let currentNode = head;
  let processIndex = 0;
  let prevNode = null;

  while (currentNode !== null && middleIndex <= size) {
    if (middleIndex - 1 !== 0 && processIndex === middleIndex - 1) {
      prevNode.next = currentNode?.next ? currentNode.next : null;
      break;
    }

    prevNode = currentNode;
    currentNode = currentNode.next;
    processIndex++;
  }

  return head;
};

function countNodes(head) {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}

module.exports = deleteMiddle;
