/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 借用新链表
  let dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  let curr = dummy.next;
  while (curr) {
    if (curr.val === val) {
      pre.next = curr.next;
    } else {
      pre = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
};
