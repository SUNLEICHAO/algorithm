/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 左闭右闭
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle = left + ((right - left) >> 1);
    console.log(left, right, middle);
    if (target === nums[middle]) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
