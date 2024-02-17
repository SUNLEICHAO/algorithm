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
  // 快慢指针
  let slow = head;
  let fast = head;
  // slow和fast之间相差n，通过fast来判断slow是否该删的节点
  while (n--) {
    fast = fast.next;
  }

  //处理头节点，若要删头节点
  if(!fast){
    return head.next
  } 

  // 一直往后遍历,直到fast为最后一个节点
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next
  return head
};