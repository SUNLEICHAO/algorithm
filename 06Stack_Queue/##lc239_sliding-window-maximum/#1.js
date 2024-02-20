/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 暴力解法，超出时间限制
  let winMax = -Number.MAX_VALUE;
  let winMaxs = [];
  for (let i = k - 1; i < nums.length; i++) {
    for (let j = i - k + 1; j < i + 1; j++) {
      winMax = Math.max(winMax, nums[j]);
    }
    winMaxs.push(winMax);
    winMax = -Number.MAX_VALUE;
  }
  return winMaxs;
};
