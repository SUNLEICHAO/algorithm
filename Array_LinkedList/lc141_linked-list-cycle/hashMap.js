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
  // 哈希表，查看当前元素存到表里了没
  let seen = new Set();
  while (head !== null) {
    if (!seen.has(head)) {
      seen.add(head)
    } else {
      return true
    }
    head = head.next
  }
  return false
};