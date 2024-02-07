/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  /* 
    哈希
    遍历words，得到每个word所对应的单词hash表；
    第一次word时将hash放入公共hash，从第二次开始，得到hash后，便利公共hash，将该次hash和公共hash对比，取小值
    得到公共的哈希表，通过两层循环，取出
    （我的写法即推荐写法）
  */

  let hashBase = new Array(26).fill(0);
  let base = "a".charCodeAt();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let hash = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      hash[word[j].charCodeAt() - base] += 1;
    }
    if (i === 0) {
      hashBase = hash.concat();
    } else {
      for (let k = 0; k < 26; k++) {
        hashBase[k] = Math.min(hash[k], hashBase[k]);
      }
    }
  }
  let res = [];
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < hashBase[i]; j++) {
      res.push(String.fromCharCode(i + base));
    }
  }
  return res;
};
