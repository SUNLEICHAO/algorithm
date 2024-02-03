/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 方法2，左闭右开
  let right = nums.length, left = 0;
  while (left < right) {
    let middle = left + ((right - left) >> 1)
    if (target === nums[middle]) {
      return middle
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return -1
};