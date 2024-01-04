/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  if (s.length % 2) return false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')')
    } else if (s[i] === '[') {
      stack.push(']')
    } else if (s[i] === '{') {
      stack.push('}')
    } else {
      let tran = stack.pop()
      if (tran !== s[i]) {
        return false
      }
    }
  }
  return !stack.length
};