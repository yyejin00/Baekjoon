function solution(arr) {
    let min = Math.min(...arr);
    let answer = arr.length===1? [-1] :arr.filter(v=>v!==min);
    return answer;
}