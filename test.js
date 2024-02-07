// let n = 19;
// let res;
// res = n.toString()
let getNext = function(n){
  return n.toString().split('').map(e=>e**2).reduce((a,b)=>a+b)
}
console.log(getNext(19))