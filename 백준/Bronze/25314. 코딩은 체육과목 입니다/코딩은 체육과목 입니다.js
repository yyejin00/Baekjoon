const input = require('fs')
.readFileSync("/dev/stdin")
  .toString()
  .trim();

  Number(input);

let long = "";
  for(let i =0;i<input/4;i++){
      long+="long ";
  }
  console.log(`${long}int`);
