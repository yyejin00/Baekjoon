const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
.split(" ")
.map(Number);

const same= input.filter((item,index)=>input.indexOf(item)!==index);
const max =Math.max(...input);

if (input.every(element => element === input[0])){
    console.log(10000+input[0]*1000);
}else if(input[0]===input[1]||input[0]===input[2]||input[1]===input[2]){
    console.log(1000+ Number(same)*100);
}else console.log(max*100);
