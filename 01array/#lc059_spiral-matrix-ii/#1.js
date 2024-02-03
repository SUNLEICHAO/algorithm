/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 剥洋葱法，设定边界，一层层递进
  // 新建矩阵，循环可以保证独特性
  let matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  // 层数，记录当前是向内的第几层 (废除该做法)
  // let ind = 0;
  // 记录的数字：1到n平方
  let count = 1;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;
  while (count <= n ** 2) {
    // 上边缘
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count++;
    }
    // 内收
    top++;

    // 右边缘
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count++;
    }
    right--;

    // 下边缘
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count++;
    }
    bottom--;

    // 左边缘
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count++;
    }
    left++;
  }
  return matrix;
};
