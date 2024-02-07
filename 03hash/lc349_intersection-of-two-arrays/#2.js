/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 排序和双指针
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let pre = 0;
  let res = [];
  let ind1 = 0;
  let ind2 = 0;
  while (true) {
    if (nums1[ind1] > nums2[ind2]) {
      ind2++;
    } else if (nums1[ind1] < nums2[ind2]) {
      ind1++;
    } else {
      if (!res.length || nums1[pre] !== nums1[ind1]) {
        res.push(nums1[ind1]);
        pre = ind1;
      }
      ind1++;
      ind2++;
    }
    if (ind1 === nums1.length || ind2 === nums2.length) {
      break;
    }
  }
  return res;
};
