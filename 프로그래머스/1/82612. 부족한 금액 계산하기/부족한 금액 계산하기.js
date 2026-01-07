function solution(price, money, count) {
    let answer=0;
    let pay = Array(count).fill(0).map((_,i)=>price*(i+1)).reduce((a,c)=>a+c);
    
    answer = money > pay ? 0 :  pay-money;

    return answer;
}