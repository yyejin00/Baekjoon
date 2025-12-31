function solution(s) {
    let len = s.length/2;
    
return s.length%2===0 ? s.slice(len-1,len+1) : s.slice(len-0.5,len+0.5);


}