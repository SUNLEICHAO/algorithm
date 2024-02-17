/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i < s.length; i++) {
    let tran = s.split(s.slice(0, i));
    if (tran.length - 1 > 1 && tran.every((e) => !e)) {
      return true;
    }
  }
  return false;
};
