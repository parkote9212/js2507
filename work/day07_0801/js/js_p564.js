var seed = 3;

for(let i = 1; i <= 5; i++){
// 전역변수를 재선언
    let seed = 5;
    let result = seed * i;
    console.log(result);
}
  console.log(seed);