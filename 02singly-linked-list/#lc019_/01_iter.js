/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 阐删除倒数第n个节点：将n个元素先存起来
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  while (curr) {
    let tran = curr;
    // 每次都找一下，后面的第n个位置是不是空的
    for (let i = 0; i < n; i++) {
      tran = tran.next;
    }
    if (tran === null) {
      if (curr.next === null) {
        prev.next = null
      } else {
        prev.next = prev.next.next;
      }
      break
    }
    prev = prev.next;
    curr = curr.next;
  }
  return dummy.next
};