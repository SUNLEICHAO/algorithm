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
  // 本身
  // 要先处理头部，因为头部和后面的处理方式不同
  while (head !== null && head.val === val) {
    head = head.next;
  }
  // 问题，这里为什么这个判断要放在这里
  if (head == null) return head;

  let prev = head;
  let curr = head.next || null;
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }
  return head;
};
