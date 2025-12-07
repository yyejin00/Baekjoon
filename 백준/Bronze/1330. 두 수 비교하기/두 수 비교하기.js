const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const comp=[">","<","=="];
if(input[0]>input[1]){
    console.log(comp[0]);
} 
else if(input[0]<input[1]) {
    console.log(comp[1]);
}
else {
    console.log(comp[2]);
};