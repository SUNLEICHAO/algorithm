/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /* 
    双指针：找到每个单词的左右边界，将该段字符添加至res，找到下一段字符的开始
  */
  s = s.trim();
  let res = "";
  let L = s.length - 1,
    R = L;
  while (L >= 0) {
    while (L >= 0 && s[L] !== " ") L--;
    res += s.slice(L + 1, R + 1) + " ";
    while (L >= 0 && s[L] === " ") L--;
    R = L;
  }
  return res.slice(0, res.length - 1);
};
