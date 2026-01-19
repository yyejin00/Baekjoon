function solution(s) {
    
if(!(s.length===4||s.length===6)){
    return answer =false;
}else if(s.includes("e")){return answer =false;}
    else if(!(Number.isInteger(Number(s)))){
    return answer =false;
}else return true;
}