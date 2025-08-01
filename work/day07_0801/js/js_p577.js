// 즉시실행함수
// (function(){
//     let userName = prompt("이름 입력");
//     document.writeln(`${userName}님 환영합니다.`);

// }());

(
    function(a,b){
    sum = a+ b;
}(100,200)
);
document.write(`함수 실행 결과 : ${sum}`);
