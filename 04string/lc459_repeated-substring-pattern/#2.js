/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // 移动匹配
  // 时间复杂度：O(n)，空间复杂度：O(1)，
  let s1 = s + s;
  let s2 = s1.slice(1, s1.length - 1);
  return s2.indexOf(s) !== -1;
};
