/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = s.split(" ");
  res = res.filter((e) => e !== "");
  for (let L = 0, R = res.length - 1; L < R; L++, R--) {
    [res[L], res[R]] = [res[R], res[L]];
  }
  return res.join(" ");
};
