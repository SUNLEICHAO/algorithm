/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 双指针法，前后两根指针，哪个大就先把哪个加进去。
  let left = 0,
    right = nums.length - 1;
  let res = [];
  //  哪个绝对值大,先加哪个
  while (left <= right) {
    let leftVal = nums[left] < 0 ? nums[left] * -1 : nums[left];
    let rightVal = nums[right] < 0 ? nums[right] * -1 : nums[right];
    if (leftVal <= rightVal) {
      res.unshift(rightVal * rightVal);
      right -= 1;
    } else {
      res.unshift(leftVal * leftVal);
      left += 1;
    }
  }
  return res;
};
