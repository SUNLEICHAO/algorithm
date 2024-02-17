/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 队列
  if(!s) return 0
  let res = 1;
  let queue = []
  for (let i = 0; i < s.length; i++) {
    let ind = queue.indexOf(s[i]);
    // 若队列中存在该元素
    if (ind !== -1) {
      queue.splice(0,ind+1)
    }
    queue.push(s[i])
    res = Math.max(res, queue.length)
  }

  return res
};