/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  /*
    按列遍历的方法(超时)
    时间复杂度：O(n2），遍历每一列需要 n，找出左边最高和右边最高的墙加起来刚好又是一个 n，所以是n² 
    空间复杂度：O(1)
  */
  let res = 0;
  // 两端不用考虑
  for (i = 1; i < height.length; i++) {
    let maxL = Math.max(...height.slice(0, i))
    let maxR = Math.max(...height.slice(i + 1, height.length))
    if (maxL > height[i] && maxR > height[i]) {
      // 当前存水量是左右最高之间小的减去自身的差值
      res = res + Math.min(maxL, maxR) - height[i];
    }
  }
  return res
};