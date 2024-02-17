/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = []
  let _ = ''
  for (let i = 0; i <= s.length; i++) {
    let char = s[i];
    // 如果不是空格，则累加，一旦遇到空格，添加到数组首部
    if (char === ' ' || !char) {
      if (_ !== '') {
        res.unshift(_)
      }
      _ = ''
      continue
    }
    _ += char;
  }
  return res.join(' ')

};