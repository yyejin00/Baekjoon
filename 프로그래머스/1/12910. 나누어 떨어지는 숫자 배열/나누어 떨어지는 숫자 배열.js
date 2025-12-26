function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b)=>a-b).forEach((v,i)=>{
        v%divisor ===0 ? answer.push(v):"";
    });
    return answer.length===0?[-1]:answer;
}