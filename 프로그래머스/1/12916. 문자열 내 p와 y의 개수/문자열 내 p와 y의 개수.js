function solution(s){
    let p = 0;
  let y = 0;

  s.toUpperCase().split("").forEach(v => {
    if (v === "P") p++;
    if (v === "Y") y++;
  });

  return p === y;
}