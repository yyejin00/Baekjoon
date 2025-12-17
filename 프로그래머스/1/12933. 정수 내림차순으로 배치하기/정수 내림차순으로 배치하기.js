function solution(n) {
    let arr = String(n).split("").sort((a,b)=>b-a);
    let answer =Number(arr.join(""));
    return answer;
}