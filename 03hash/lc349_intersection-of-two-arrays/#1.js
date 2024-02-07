/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 哈希(数组)
  // 时间复杂度（O(n)），空间复杂度（O(n)）
  // 优化：在nums1和nums2中遍历长度较小，节约时间
  if (nums1.length > nums2.length) {
    let _ = nums2;
    nums2 = nums1;
    nums1 = _;
  }

  let res = [];
  nums1.forEach((num) => {
    // 如果nums1中的num在nums2中出现（交集），但不在返回数组中，则添加
    if (nums2.indexOf(num) !== -1 && res.indexOf(num) === -1) {
      res.push(num);
    }
  });
  return res;
};
