function solution(x) {
    let arr = x.toString().split("");
    let sum = arr.reduce((a,c)=>Number(c)+a,0);
    let answer;
    if (x%sum===0) {
        return answer=true;
    }else return answer=false;
}