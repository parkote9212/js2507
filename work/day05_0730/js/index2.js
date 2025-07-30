let myHour = new Date().getHours();
let myTime = new Date();
let greeting = ""
let timeAm = 9
let timePm = 18

console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getFullYear());
console.log(new Date());
console.log(new Date().getTime());
if (myHour < timeAm) {
    greeting = "등원준비"
}
else if (myHour < timePm) {
    greeting = "열공"
}
else {
    greeting = "굿 귀가"
}
console.log(greeting);

let text;
let myTxt
text = Math.random();
if (text > 0.5) {
    document.getElementById("demo").innerHTML = `<img src="../img/coinFront.png" alt="동전앞면">`;
}
else {
    document.getElementById("demo").innerHTML = `<img src="../img/coinBack.png" alt="동전뒷면">`;
}

