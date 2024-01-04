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
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  // 这里temp要赋值给哑节点，不要给head
  let temp = dummyHead;
  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    // 指针移向node1，下一对的前面
    temp = node1;
  }
  return dummyHead.next

  // if (!head) return
  // let curr = head;
  // while (curr) {
  //   if (curr.next) {
  //     [curr.next, curr.next.next] = [curr.next.next, curr]
  //   }
  //   curr = curr.next.next;
  // }
};