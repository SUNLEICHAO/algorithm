/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 双层循环
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === val) {
      for (let j = i; j < length - 1; j++) {
        nums[j] = nums[j + 1]
      }
      i--
      length--
    }
  }
  return length
};