let str = "100000000000"; //转换为:100,000,000,000

// #1 test regex
// const r = str.replace(/(?=\B(\d{3})+$)/g, ",");

let ind = 1;
for (let i = str.length; i >= 0; i -= 3) {
  if ([0, str.length].includes(i)) {
    continue;
  }
  str = str.slice(0, i).concat(",", str.slice(i, str.length));
}
console.log(str);
