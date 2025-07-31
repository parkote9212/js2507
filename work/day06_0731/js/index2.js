// let session = prompt("관심 세션을 선택해 주세요. 1.마케팅, 2.개발, 3.디자인");

// switch(session){
//     case "a": alert("마케팅 세션은 201호에서"); 
//     break;
//     case "b": alert("개발 세션은 202호에서") ;
//     break;
//     case "c": alert("디자인 세션은 203호에서"); 
//     break;
//     default : alert("입력오류");
// }

// 입장객수 의자만들기

let memNum = parseInt(prompt("입장객 수는 몇명인가요?"));
let colNum = parseInt(prompt("한줄에 몇명씩 앉나요?"));
let rowNum;
let seatNo


if (colNum % memNum === 0) {
    rowNum = colNum / memNum;
}
else {
    rowNum = parseInt(memNum / colNum) + 1;
}

// document.writeln(`입장객수는 ${memNum}명이며, 한줄에 ${colNum}명씩 앉으며 필요한 줄의 개수는 ${rowNum}입니다.`);
document.writeln(`<table>`);
for (i = 0; i < rowNum; i++) {
    document.writeln(`<tr>`);
    for (j = 0; j < colNum; j++) {
        seatNo = i * colNum + j + 1;
        if (seatNo > memNum)break;
    document.writeln(`<td> 좌석 ${seatNo} </td>`);
    }
    document.writeln(`</tr>`);
}
document.writeln(`</table>`);