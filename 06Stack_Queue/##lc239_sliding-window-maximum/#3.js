/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 同#2
  let deque = [];
  let i = 0,
    j = 0;
  while (j < k) {
    while (deque.length && deque[deque.length - 1] < nums[j]) {
      deque.pop();
    }
    deque.push(nums[j++]);
  }
  let res = [deque[0]];
  while (j < nums.length) {
    if (deque[0] === nums[i]) {
      deque.shift();
    }
    while (deque.length && deque[deque.length - 1] < nums[j]) {
      deque.pop();
    }
    deque.push(nums[j]);
    res.push(deque[0]);
    i++, j++;
  }
  return res;
};
