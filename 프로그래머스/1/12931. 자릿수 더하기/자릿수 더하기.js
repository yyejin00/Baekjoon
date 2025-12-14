function solution(n)
{
    let arr = String(n).split("");
    let answer=arr.reduce((a,c)=>Number(c)+a,0 );

     return answer;
}
