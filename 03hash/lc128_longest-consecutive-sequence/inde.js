// let tar = new Array(Math.max(...nums)).fill(0)
// for (let i = 0; i < nums.length; i++) {
//   tar[nums[i]] = 1
// }
// let res = 1, resMax = 0;

// for (let i = 0; i < tar.length; i++) {
//   // res
//   if (tar[i - 1] === 1 && tar[i] === 1) {
//     res += 1
//   }
//   if (tar[i - 1] === 1 && tar[i] === 0) {
//     resMax = res
//   }
// }
// console.log(tar)
// nums.sort((a,b)=>a-b)