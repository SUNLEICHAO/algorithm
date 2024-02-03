/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 如果相同，从最后取一个拿过来
  let back = nums.length;
  for (let i = 0; i < back; i++) {
    if (nums[i] === val) {
      nums[i] = nums[back - 1];
      back -= 1;
      i--;
    }
  }
  return back;
};
