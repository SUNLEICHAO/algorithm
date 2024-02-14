let redPackage = function (total, num) {
  let res = [];
  let total100 = total * 100;
  let minValue = 1;
  if (minValue * num > total100) return "金额不足以分配红包";
  for (let i = 0; i < num; i++) {
    res.push(minValue);
    total100 -= minValue;
  }
  for (let i = 0; i < num; i++) {
    let _ = Math.floor(Math.random() * (total100 - 0 + 1) + 0);
    if (i === num - 1) _ = total100;
    res[i] += _;
    total100 -= _;
    if (total100 <= 0) break;
  }
  res = res.map((e) => e / 100);
  console.log(res);
  console.log(res.reduce((a, b) => a + b));
  return res;
};
redPackage(0.5, 4);
