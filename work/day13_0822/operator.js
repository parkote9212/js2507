// Boolean
let a = true;
let b = false;
let c = 10 > 5;
let d = Boolean(null);
let e = Boolean(undefined);
let f = Boolean(0);

document.getElementById("result1").innerHTML = a;
document.getElementById("result2").innerHTML = b;
document.getElementById("result3").innerHTML = c;
document.getElementById("result4").innerHTML = d;
document.getElementById("result5").innerHTML = e;
document.getElementById("result6").innerHTML = f;

// 복합 대입 연산자

let num1 = 10;
let num2 = 3;
let r = document.querySelector("#result");
document.querySelector("#result").innerHTML = `num1 += num2 = ${num1+=num2} <hr>`;
r.innerHTML += `num1 -= num2 = ${num1 -= num2} <hr>`
r.innerHTML += `num1 *= num2 = ${num1 *= num2} <hr>`
r.innerHTML += `num1 %= num2 = ${num1 %= num2} <hr>`

// 증감 연산자

let num3 = 10;
let num4 = 20;
let result = 0;

let r2 = document.querySelector("#result10");
num3--;
r2.innerHTML += `num3-- = ${num3} <hr>`;
num3++;
r2.innerHTML += `num3++ = ${num3} <hr>`;
result = num4++;
r2.innerHTML += `result = num4++ > result = ${result}, num4 = ${num4} <hr>`;
result = ++num4;
r2.innerHTML += `result = ++num4 > result = ${result}, num4 = ${num4} <hr>`;
