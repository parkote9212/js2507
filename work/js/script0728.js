// 외부스크립트 연결
document.getElementById("test1").innerHTML="이글은 외부스크립트에서 작성된 글입니다."

//할당 연산자
// 선언
let a = 15;
let b = 2;
let result1;    

document.getElementById("a").innerHTML=`a는 ${a}로 할당되었습니다.`;
document.getElementById("b").innerHTML=`a는 ${b}로 할당되었습니다.`;

// 구현 및 출력
result1 = a+b;
document.getElementById("result1").innerHTML=`a+b = ${result1}<br>`;
result1 += b;
document.getElementById("result1").innerHTML+=`위의 값 += b = ${result1}<br>`;
result1 -= b;
document.getElementById("result1").innerHTML+=`위의 값 -= b = ${result1}<br>`;
result1 *= b;
document.getElementById("result1").innerHTML+=`위의 값 *= b = ${result1}<br>`;
result1 /= b;
document.getElementById("result1").innerHTML+=`위의 값 /= b = ${result1}<br>`;
result1 %= b;
document.getElementById("result1").innerHTML+=`위의 값 %= b = ${result1}<br>`;

//비교 연산자

document.getElementById("result2").innerHTML+=`3 == "3"은 ${3=="3"}<br>`;
document.getElementById("result2").innerHTML+=`3 != "3"은 ${3!="3"}<br>`;
document.getElementById("result2").innerHTML+=`3 === "3"은 ${3==="3"}<br>`;
document.getElementById("result2").innerHTML+=`3 !== "3"은 ${3!=="3"}<br>`;
document.getElementById("result2").innerHTML+=`3<4은 ${3<4}<br>`;
document.getElementById("result2").innerHTML+=`3>4은 ${3>4}<br>`;
document.getElementById("result2").innerHTML+=`3<=3은 ${3<=3}<br>`;
document.getElementById("result2").innerHTML+=`4>3은 ${4>3}<br>`;
document.getElementById("result2").innerHTML+=`3>4은 ${3>4}<br>`;
document.getElementById("result2").innerHTML+=`3>=3은 ${3>=3}<br>`;