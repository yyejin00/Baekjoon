const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

  let arr=[];
  const num =input[0];
  let newinput=input.shift();

arr = input.flatMap(item => item.trim().split(" ").map(Number));
    for(let i =0; i<arr.length;i+=2){
      console.log(`${arr[i]+arr[i+1]}`);
    }
