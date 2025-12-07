const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const ar = String(input[1]).split('').map(Number);
const tr = input[0]*ar[2];
const fo = input[0]*ar[1];
const fi = input[0]*ar[0];

console.log(tr);
console.log(fo);
console.log(fi);
console.log(input[0] * input[1]);
