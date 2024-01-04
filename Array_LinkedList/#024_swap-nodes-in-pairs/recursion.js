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
var swapPairs = function (head) {
  // 如果下一组的第一个为空或第二个为空，返回该值
  if (head === null || head.next === null) return head
  const newHead = head.next;
  // newHead.next即head.next.next，每次交换两组
  // （问题）交换的顺序的重要性？
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead
};