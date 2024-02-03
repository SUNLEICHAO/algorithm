/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 暴力，两层循环
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        res = res ? Math.min(j - i + 1, res) : j - i + 1;
        break;
      }
    }
  }
  return res;
};
