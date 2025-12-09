const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const ar=Array(Number(input)).fill(1).map((v,i)=>v+i);

let sum =0;
ar.forEach((v=>{
  sum+=v;
}))
console.log(sum);