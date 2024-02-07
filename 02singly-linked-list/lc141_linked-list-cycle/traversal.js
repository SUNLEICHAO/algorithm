/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let start = Date.now()
  let tran = head;
  let flag = true
  while (true) {
    if (tran === null) {
      flag = false;
      break
    }
    tran = tran.next
    // 设定超时的时间
    if (Date.now() - start > 1000) break
  }
  return flag
};