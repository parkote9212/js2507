// p528 3의 배수 확인하기 1,2
// let userNumber = prompt('숫자를 입력하세요.');

// if (userNumber !== null) {
//     if (parseInt(userNumber) % 3 === 0) {
//         alert('3의 배수 입니다.');
//     }
//     else {
//         alert('3의 배수가 아닙니다.');
//     }
// }
// else {
//     alert('입력이 취소됐습니다.');
// }


// p530 조건 연산자를 사용해 3d의 배수 확인하기
// let userNumber = prompt('숫자를 입력하세요.');

// if (userNumber === "") {
//     alert('입력값이 없습니다.');
// }
// if (userNumber === "") {
//     alert('공백이 입력되었습니다.');
// }
// else if (userNumber !== null){
//     (parseInt(userNumber) % 3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.');
// }
// else {
//     alert('입력이 취소됐습니다.');
// }
//p530 And,OR연산자
let numberOne = prompt("50 미만인 숫자를 입력하세요.");
let numberTwo = prompt("50 미만인 숫자를 입력하세요.");

// p530 Or 연산자
// if (numberOne < 10 || numberTwo < 10) {
//     alert("숫자 2개 중에서 최소한 하나는 10미만이군요");
// }
// else {
//     alert("숫자 2개 중에서 10 미만인 수는 없습니다.");
// }

// p531 And 연산자
// if (numberOne === null || numberTwo === null )
// {
//     alert('입력이 취소됐습니다.');
// }
// else if(isNaN(numberOne)|| isNaN(numberTwo) )
//     {
//         alert('숫자를 입력하지 않으셨습니다.');
//     }
if (!isNaN(numberOne) && !isNaN(numberTwo) && numberOne !== null && numberOne !== null && numberOne !== "" && numberOne !== "") {
    if (numberOne < 50 && numberTwo < 50) {
        alert("숫자 2개 모두 50미만이군요.");
    }
    else {
        alert("50미만이 아닌 값이 있습니다.");
    }
}
else {
    alert("유효하지 않는 값입력으로 취소")
}
