function solution(arr) {
    let answer =(arr.reduce((a,c)=>c+a,0))/arr.length;
    return answer;
}