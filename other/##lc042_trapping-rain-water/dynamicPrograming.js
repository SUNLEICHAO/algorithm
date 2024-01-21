/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  /* 
   * 解法：动态规划，原理同按列取值的解法
   * 一定要注意边界的取值
   * 
   * 时间复杂度：O(n)
   * 空间复杂度：O(n)，用来保存每一列左边最高的墙和右边最高的墙。
  */
  let sum = 0;
  let max_left = []
  max_left[0] = height[0]
  let max_right = []
  max_right[height.length - 1] = height[height.length - 1]

  for (let i = 1; i < height.length; i++) {
    max_left[i] = Math.max(max_left[i - 1], height[i - 1])
  }

  for (let i = height.length - 2; i >= 0; i--) {
    max_right[i] = Math.max(max_right[i + 1], height[i + 1])
  }
  for (let i = 1; i < height.length - 1; i++) {
    let min = Math.min(max_left[i], max_right[i])
    if (min > height[i]) {
      console.log(i, min, height[i])
      sum = sum + (min - height[i])
    }
  }
  return sum
};