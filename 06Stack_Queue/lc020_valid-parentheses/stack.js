/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 三种不匹配的情况：左右类型不匹配；左多；左少
  let stack = []; // 方法：push + pop
  // 剪枝
  if (s.length % 2) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "{") {
      stack.push("}");
    } else {
      let tran = stack.pop();
      // 可以判断两种情况：左少和类型不匹配
      if (tran !== s[i]) {
        return false;
      }
    }
  }
  // 返回：左多为 false 或 刚好合适为 true
  return !stack.length;
};
