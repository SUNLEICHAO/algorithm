/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let sumAddMap = function (n1, n2, map) {
    let sum = n1 + n2;
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  };
  
  // 找到前两个和后两个数组之和的哈希表；遍历其中一个，在另一个哈希表中找对应的（两数之和问题）
  let sumAB = new Map();
  let sumCD = new Map();
  let n = nums1.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sumAddMap(nums1[i], nums2[j], sumAB);
      sumAddMap(nums3[i], nums4[j], sumCD);
    }
  }
  sumAB.forEach((value, key) => {
    let tar = 0 - key;
    if (sumCD.has(tar)) {
      res += value * sumCD.get(tar);
    }
  });
  return res;
};
