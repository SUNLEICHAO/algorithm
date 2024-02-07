/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  // 若不是快乐数，求后数必会循环，则可借助链表的思想
  let slow = n;
  let fast = getNext(n);
  // 当快慢两指针相遇说明有环
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};

let getNext = function (n) {
  return n
    .toString()
    .split("")
    .map((i) => i ** 2)
    .reduce((a, b) => a + b);
};
