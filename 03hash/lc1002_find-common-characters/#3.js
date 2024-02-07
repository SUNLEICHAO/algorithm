/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // 方法一样，但该方法更具备普遍性
  let commonMap = new Map();
  for (let j = 0; j < words.length; j++) {
    let word = words[j];
    let map = new Map();
    for (let i = 0; i < word.length; i++) {
      if (map.has(word[i])) {
        map.set(word[i], map.get(word[i]) + 1);
      } else {
        map.set(word[i], 1);
      }
    }
    if (j === 0) {
      commonMap = map;
    } else {
      commonMap.forEach((value, key) => {
        if (map.has(key)) {
          commonMap.set(key, Math.min(map.get(key), commonMap.get(key)));
        } else {
          commonMap.delete(key);
        }
      });
    }
  }
  let res = [];
  commonMap.forEach((value, key) => {
    while (value--) {
      res.push(key);
    }
  });
  return res;
};
