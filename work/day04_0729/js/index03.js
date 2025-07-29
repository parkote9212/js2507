let userNumber = prompt("숫자를 입력하세요");
if(userNumber > 0)
(parseInt(userNumber) % 3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다');
else
    alert('입력이 취소됐습니다.');