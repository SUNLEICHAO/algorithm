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
var reverseList = function (head) {
  //#2：递归
  if (head === null || head.next === null) return head
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead
};

// 时间复杂度O(n)，需要对每个节点（数量为n）反转
// 空间复杂度O(n)，递归调用的栈空间为n层