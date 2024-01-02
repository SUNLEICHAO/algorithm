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
//#1：迭代
var reverseList = function (head) {
  
  // 前一个
  let prev = null;
  let curr = head;
  while (curr) {
    // 把后一个节点存下来
    const next = curr.next;
    // 后一个等一
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev
};

// 时间复杂度O(n)，空间复杂度O(1)