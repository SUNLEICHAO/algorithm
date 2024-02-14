/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 排序+快慢指针
  nums.sort((a, b) => a - b);
  let res = [];
  // console.log(nums);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) break;
    // 这种写法不对！因为这样会忽视左侧元素和左指针元素相同的情况，例如[ -4, -1, -1, 0, 1, 2 ]，会忽视-1，-1，2
    // if (nums[i] === nums[i + 1]) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    console.log(i, "---", nums[i]);
    for (let L = i + 1, R = nums.length - 1; L < R; ) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum > 0) {
        R--;
      } else if (sum < 0) {
        L++;
      } else {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      }
    }
  }
  return res;
};
