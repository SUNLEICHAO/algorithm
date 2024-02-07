/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 数组
  // 时间复杂度（O(n)），空间复杂度（O(n)）

  let arrA = Array.from(ransomNote);
  let arrB = Array.from(magazine);
  for (let i = 0; i < arrA.length; i++) {
    if (arrB.indexOf(arrA[i]) !== -1) {
      arrB.splice(arrB.indexOf(arrA[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};
