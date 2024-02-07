/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // 哈希
  // 和第一种方法思路一样，具体实现不同
  let res = [];
  let count = {};

  // 对每个第一个words中的字符遍历
  // some和forEach效果相同
  words[0].split('').forEach(letter => {
    let min = Number.MAX_VALUE;
    words.some(word => {
      let len = word.split(letter).length - 1;
      min = len < min ? len : min;
      count[letter] = min;
    })
  })

  // 从目标数组中取出对应的值
  Object.keys(count).forEach(letter => {
    for (let i = 0; i < count[letter]; i++) {
      res.push(letter)
    }
  })
  console.log(count)
  return res
};