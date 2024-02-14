/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  while (len--) {
    s.push(...s.splice(len - 1, 1));
  }
};
