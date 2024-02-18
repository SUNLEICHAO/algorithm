/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let token of tokens) {
    if (isNaN(Number(token))) {
      //非数字
      let n2 = stack.pop(); //栈顶两个数字
      let n1 = stack.pop();
      switch (token) {
        case "+":
          stack.push(n1 + n2);
          break;
        case "-":
          stack.push(n1 - n2);
          break;
        case "*":
          stack.push(n1 * n2);
          break;
        case "/":
          stack.push((n1 / n2) | 0);
          break;
      }
    } else {
      //数字
      stack.push(Number(token));
    }
  }
  return stack[0];
};
