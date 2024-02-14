/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // 抽离出反转字符串的函数
  let reverse = function (string, start, end) {
    for (let L = start, R = end; L < R; L++, R--) {
      [string[L], string[R]] = [string[R], string[L]];
    }
    return string;
  };
  // 将其转换为数组，方便操作
  s = s.split("");
  for (let L = 0, R = k - 1; L < s.length; L += 2 * k, R += 2 * k) {
    if (R > s.length) {
      R = s.length - 1;
    }
    s = reverse(s, L, R);
  }
  return s.join("");
};
