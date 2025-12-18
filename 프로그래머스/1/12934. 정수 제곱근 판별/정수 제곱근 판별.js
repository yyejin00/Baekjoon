function solution(n) {
    if(Math.sqrt(n).toString().indexOf(".")===-1){
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
    }else return -1;

}