/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 拷贝覆盖（本质即快慢指针）
  let res = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[res] = num;
      res++;
    }
  }
  return res;
};
