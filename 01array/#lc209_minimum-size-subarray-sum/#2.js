/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动窗口,或双指针
  let right = 0,
    left = 0;
  let sum = nums[left],
    res = 0;
  while (right < nums.length) {
    if (sum < target) {
      sum += nums[++right];
    } else {
      res = res == 0 ? right - left + 1 : Math.min(right - left + 1, res);
      sum -= nums[left++];
    }
  }
  return res;
};
