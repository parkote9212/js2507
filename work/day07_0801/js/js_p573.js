function calcSum(n){
    let sum = 0;
    for(let i=1; i<=n;i++){
        sum += i;
    }
    document.writeln(sum);
}
    let userNumber = prompt("숫자합");
      calcSum(parseInt(userNumber));

