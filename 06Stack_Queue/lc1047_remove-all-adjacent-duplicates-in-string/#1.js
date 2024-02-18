/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // 栈，每次都和最上面的比较，若不同，加入；若相同，移除栈顶元素
  // push pop
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return stack.join('')
};