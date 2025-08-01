// 함수선언
let x = myFunction(4, 5);
document.getElementById("demo1").innerHTML = `myFunction 함수 결과값은 ${x}입니다.`;

function myFunction(a, b) {
    return a * b;
}
//함수표현식
const y = function (c, d) { return c * d };
document.getElementById("demo2").innerHTML = y(4, 3);

// Function() 함수생성자
const myFun3 = new Function("a", "b", "return a*b");
document.getElementById("demo3").innerHTML = y(3, 5);

// 함수생성자 생략
const myFun4 = function (a, b) { return a * b };
document.getElementById("demo4").innerHTML = myFun4(4, 5);

// 자체호출함수
(function () {
    document.getElementById("demo5").innerHTML = "Hello! I called myself";
})();

//함수는 값으로 사용될수 있습니다.
function myFun5(a, b) {
    return a * b;
}
let z = myFun5(5, 6) * 2;
document.getElementById("demo6").innerHTML = z;

// toString() 함수를 문자열로 반환
function myFun6(a, b) {
    return arguments.length;
}
let text = myFun6.toString();
document.getElementById("demo7").innerHTML = myFun6(2, 3);
document.getElementById("demo8").innerHTML = text;

//화살표 함수
let hello = () => {
    return "Hello World!"
}
document.getElementById("demo9").innerHTML = hello();

// 매개변수 함수
let hello2 = (val) =>  "Hello " + val;
document.getElementById("demo10").innerHTML = hello2("Universe!");

// 괄호 없는 화살표 함수:
let hello3 = val =>  "Hello " + val;
document.getElementById("demo11").innerHTML = hello3("Universe@@");

myFun7 = (a, b) => a * b
let result = myFun7(6,7)
console.log(result)