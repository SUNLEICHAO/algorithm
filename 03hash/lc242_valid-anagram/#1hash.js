/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = new Array(26).fill(0);
  let base = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    map[s[i].charCodeAt() - base] += 1;
    map[t[i].charCodeAt() - base] -= 1;
  }
  return map.every((item) => item === 0);
};
