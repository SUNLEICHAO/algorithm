/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  // 排序；一项项遍历；差1递增，差0跳过，差1以上重新计数
  nums.sort((a, b) => a - b)
  let res = 1; resMax = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      resMax = Math.max(resMax, ++res)
    } else if (nums[i] - nums[i - 1] === 0) {
    } else {
      res = 1
    }
  }
  return resMax
};