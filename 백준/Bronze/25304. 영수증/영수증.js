const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
.split("\n");

const total = input[0];
input.shift();
input.shift();
const moneyvalue = input.flatMap((item) => item.split(' '));

const totalvalue=moneyvalue.map((v,i)=>(i % 2 === 0 ? v * moneyvalue[i + 1] : null)).filter(v=>v!==null);

let result=0;
totalvalue.forEach((v,i)=>{
  result+=v;
});

if(Number(total)===result){
  console.log("Yes");
}else console.log("No");