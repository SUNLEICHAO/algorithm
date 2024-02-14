/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 分割->筛出空值->反转->合并为字串
  return s.split(' ').filter(e=>e).reverse().join(' ')
};