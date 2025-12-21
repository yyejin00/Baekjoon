function solution(a, b) {
    let answer=0;
    let arr=[];
    if(a===b){
        return answer=a;
    }else{
        let [big,small] = a>b ? [a,b] : [b,a];
        arr=Array(big-small+1).fill(0).map((_,i)=>small+i);
        answer =arr.reduce((a,c)=>a+c,0);
        return answer;
    }
    return answer;
}