function solution(phone_number) {
    let str ="*";
    let answer = "";
    
    answer = str.repeat(phone_number.length-4) + phone_number.slice(-4);
    return answer;
}