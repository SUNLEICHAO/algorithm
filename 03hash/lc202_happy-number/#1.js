/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 定一个循环次数，10
  let ni = 10;
  let tar = n;
  while (ni--) {
    let nums = String(tar)
      .split("")
      .map((e) => +e);
    let sum = 0;
    nums.forEach((e) => {
      sum += e * e;
    });
    tar = sum;
    if (sum === 1) return true;
  }
  return false;
};
