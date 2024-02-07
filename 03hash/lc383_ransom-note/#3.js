/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let strArr = new Array(26).fill(0),
    base = "a".charCodeAt();
  for (const char of magazine) {
    strArr[char.charCodeAt() - base]++;
  }
  for (const char of ransomNote) {
    if (strArr[char.charCodeAt() - base] === 0) {
      return false;
    } else {
      strArr[char.charCodeAt() - base]--;
    }
  }
  return true;
};
