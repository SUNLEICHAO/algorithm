/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 哈希集合
  let setA = new Set();
  let curr = headA;
  while (curr) {
    setA.add(curr)
    curr = curr.next
  }
  curr = headB;
  while (curr) {
    if (setA.has(curr)) {
      return curr
    }
    curr = curr.next;
  }
  return null
};