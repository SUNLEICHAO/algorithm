/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 按行遍历的方法
  let max = Math.max(...height);
  // ans：最终结果；temp，单次的储水数。
  let res = 0
  let flag;
  for (i = 1; i <= max; i++) {
    flag = true;
    let temp = 0;
    for (j = 0; j < height.length; j++) {
      if (height[j] < i) {
        // 初始时所忽略的柱子,若flag为true，不运行后面的表达式
        flag || temp++
      } else {
        flag = false
        res = res + temp
        temp = 0
      }
    }
  }
  return res
};