/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 暴力解法
  // 先求平方,后排序
  return nums.map((e) => e * e).sort((a, b) => a - b);
};
