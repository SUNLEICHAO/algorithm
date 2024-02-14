let nums = [13, 2, 34, 122, 2, 2, 34, 54, 4, 4, 6];
let res = 0;
for (let i = 0; i < nums.length; i++) {
  // let res = `第${i}个：${nums[i]} `;

  // if (nums[i] === nums[i + 1]) continue;
  if (i > 0 && nums[i] === nums[i - 1]) continue;
  // res += `，判断后：${nums[i]}`;
  res += nums[i];
}
console.log(res);
