/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 两个哈希表，key为字母，value为次数；比较两个map，B要完全包含A
  // 时间复杂度（O(n)），空间复杂度（O(n)）

  let mapA = new Map();
  let mapB = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];
    if (mapA.has(char)) {
      mapA.set(char, mapA.get(char) + 1);
    } else {
      mapA.set(char, 1);
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    if (mapB.has(char)) {
      mapB.set(char, mapB.get(char) + 1);
    } else {
      mapB.set(char, 1);
    }
  }

  let flag = true;
  mapA.forEach((value, key) => {
    if (!mapB.has(key) || mapB.get(key) < value) {
      flag = false;
    }
  });
  return flag;
};
