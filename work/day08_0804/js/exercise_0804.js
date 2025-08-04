// 
let names = ['박','근','철'];
let greetings = [' ','고객님',' ','안녕하십니까'];

// 배열 2개 합치기

let namesgreeting1 = names.concat(greetings);
document.getElementById("result1").innerHTML = namesgreeting1 + "<br><hr>";

let joinName = names.join('_');
let namesgreeting2 = joinName.concat(greetings);
document.getElementById("result2").innerHTML = namesgreeting2 + "<br><hr>";

let push1 = namesgreeting1.push('!');
document.getElementById("result3").innerHTML = `${namesgreeting1} <br><hr>`;

let unshift1 = namesgreeting1.unshift('수원역 지점 ');
document.getElementById("result4").innerHTML = `${namesgreeting1} <br><hr>`;

let pop1 = namesgreeting1.pop(1);
document.getElementById("result5").innerHTML = `${namesgreeting1} <br><hr>`;

let shift1 = namesgreeting1.shift(1);
document.getElementById("result6").innerHTML = `${namesgreeting1} <br><hr>`;

let splice1 = namesgreeting1.splice(6,0,'오늘도 좋은 하루 ');
document.getElementById("result7").innerHTML = `${namesgreeting1} <br><hr>`;

let slice1 = namesgreeting1.slice(0,3);
document.getElementById("result8").innerHTML = `${slice1} <br><hr>`;
