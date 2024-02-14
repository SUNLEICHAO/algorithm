/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let L = 0,
    R = s.length - 1;
  while (L < R) {
    let _ = s[L];
    s[L] = s[R];
    s[R] = _;
    L++, R--;
  }
};
