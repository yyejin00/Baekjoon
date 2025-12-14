function solution(d, budget) {
    d.sort((a,b)=>a-b);
    while(d.reduce((a,c)=>a+c,0)>budget){
        d.pop();
    };
    return d.length;
}
