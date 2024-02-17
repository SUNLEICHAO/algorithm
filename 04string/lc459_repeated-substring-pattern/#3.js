/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // kmp匹配
  if (s.length === 0) return false;

  const getNext = (s) => {
    let next = [];
    let j = -1;

    next.push(j);

    for (let i = 1; i < s.length; ++i) {
      while (j >= 0 && s[i] !== s[j + 1]) j = next[j];
      if (s[j] === s[j + 1]) j++;
      next.push(j);
    }

    return next;
  };
  let next = getNext(s);

  if (
    next[next.length - 1] !== -1 &&
    s.length % (s.length - (next[next.length - 1] + 1)) === 0
  )
    return true;
  return false;
};

let s = abcabcabcabc;
let res = repeatedSubstringPattern(s);
console.log(res);
