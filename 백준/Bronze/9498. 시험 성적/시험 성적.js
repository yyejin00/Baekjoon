const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();
const ar=["A","B","C","D","F"];
Number(input);
if (input>=90){
    console.log(ar[0]);
}
else if (input>=80){
    console.log(ar[1]);
}
else if (input>=70){
    console.log(ar[2]);
}
else if (input>=60){
    console.log(ar[3]);
}
else{
    console.log(ar[4]);
}