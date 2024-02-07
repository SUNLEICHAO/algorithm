/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 快慢指针
  let slow = head;
  let fast = head;
  // 外层构建第一次相遇
  while (fast) {
    if (fast.next === null) return null; // 表示无环
    slow = slow.next;
    fast = fast.next.next;
    // 若快慢指针相遇（在某一处相遇，不一定在入口），则开始构建第二次相遇
    if (slow === fast) {
      fast = head;
      while (true) {
        if (slow === fast) { //入环处相遇
          return slow;
        }
        slow = slow.next;
        fast = fast.next;
      }
    }
  }
  return null;
};
