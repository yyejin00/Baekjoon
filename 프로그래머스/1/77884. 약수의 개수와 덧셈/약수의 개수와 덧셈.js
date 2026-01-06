function solution(left, right) {
//약수개수가 홀수인 경우 : 제곱 수
//약수개수가 짝수인 경우 : 그외의 수.
    
    let leng = right -left +1;
    let arr = Array(leng).fill(0).map((v,i)=>left+i);
    let answer =0;
    arr.forEach(v=>{
        if(!Number.isInteger(Math.sqrt(v))){
            answer += v;
        }else answer-=v;
    });
    
    
    return answer;
}