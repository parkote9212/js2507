// 시간표시
// let now = new Date();
// document.writeln("현재 시각은" + now);
// document.writeln(`현재 시각은  ${now.toLocaleString()}`);

//
// 배열
// let arr1 = new Array();
// let arr2 = new Array(4);
// arr3 = new Array("one","two","three","four");
// let arr4 = new Array("one","two","three","four");

// for(let i=0; i<arr3.length; i++){
//     document.writeln(`<p>${arr3[i]}</p>`)
// }

//배열 합치기
//선언

let nums = [1,2,3];
let chars = ['a','b','c','d'];

// 배열 2개 합치기

let numsChars = nums.concat(chars);
let charsNums = chars.concat(nums);
document.writeln(`nums에 chars 합치면 : ${numsChars}, <br> chars에 ums 합치면:
    ${charsNums}`);
    document.writeln(`<hr>`)


//  배열 안의 요소 합치기
let string1 = nums.join();
document.writeln(`구분자 없이: ${string1}<br>`);
let string2 = chars.join('/');
document.writeln(`/ 구분자 지정: ${string2}<br><hr>`);

//배열에 새로운 요소 추가

let ret1 = nums.push(4,5);
document.writeln(`length: ${ret1} | 배열: ${nums}<br>`);
let ret2 = nums.unshift(0);
document.writeln(`length: ${ret2} | 배열: ${nums}<br><hr>`);

// 배열에서 요소 꺼내기
let popped1 = chars.pop();
document.writeln(`꺼낸 요소: ${popped1}, | 배열: ${chars}<br>`);
let popped2 = chars.shift();
document.writeln(`꺼낸 요소: ${popped2}, | 배열: ${chars}<br><hr>`);

// splice 메서드 
let study = ['html','css','javascript','jquary','react','nodejs'];
document.writeln("Study 배열 : " + study + "<br><hr>");

//인수1개
let js = study.splice(2);
document.writeln(`반환된 배열: ${js}<br>` );
document.writeln(`변경된 배열: ${study}<br><hr>` );
//인수가 2개
let jquary = js.splice(1,1);
document.writeln(`반환된 배열: ${jquary}<br>` );
document.writeln(`변경된 배열: ${js}<br><hr>` );

// 인수가3개
let modernJs = js.splice(1,0, 'typescript');
document.writeln(`반환된 배열: ${modernJs}<br>` );
document.writeln(`변경된 배열: ${js}<br><hr>` );

//slice()메서드 기존 배열에 영향을 주지 않음
let colors = ["red" ,"green","blue","white","black"];

document.writeln("Colors 배열 : " + colors + "<br><hr>");
document.writeln(colors.slice(2) + "<br>");
document.writeln(colors);
document.writeln("<hr>");
document.writeln(colors.slice(2,4) + "<br>");
document.writeln(colors);
document.writeln("<hr>");
