function solution(x, n) {
    let answer=Array(n).fill(0).map((v,i)=>v+=x*(i+1));
    
    return answer;
}