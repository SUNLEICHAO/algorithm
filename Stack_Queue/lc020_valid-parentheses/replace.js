/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 时间复杂度较高，O
  let length;
  do {
    length = s.length
    s = s.replace('()','').replace('[]','').replace('{}','')
  } while(length !== s.length)
  return !s.length
};