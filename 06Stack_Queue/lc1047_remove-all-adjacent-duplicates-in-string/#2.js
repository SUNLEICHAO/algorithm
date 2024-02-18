/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // 指针
  if (s.length === 1) return s;
  s = s.split("");
  let slow = 0;
  for (let fast = 1; fast < s.length; fast++) {
    if (s[slow] === s[fast]) {
      s.splice(slow, 2);
      slow--;
      fast -= 2;
    } else {
      slow++;
    }
  }
  s = s.join("");
  return s;
};
