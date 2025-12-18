function solution(n) {
    let answer= n.toString().split("").reverse().map(v=>Number(v));
    return answer;
}