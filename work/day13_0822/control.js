let r4 = document.querySelector("#result40");

var walkAmount = 6000;

if (walkAmount >= 10000) {
  r4.innerHTML = `매우 좋은 습관이네요 <br>`;
} else if (walkAmount >= 5000 && walkAmount < 10000) {
  r4.innerHTML = `좋은 습관이네요 <br>`;
} else if (walkAmount >= 3000 && walkAmount < 5000) {
  r4.innerHTML = `운동량이 부족해요 <br>`;
} else if (walkAmount >= 0 && walkAmount < 3000) {
  r4.innerHTML = `운동량이 매우 부족해요 <br>`;
}
r4.innerHTML += `---end1------`;

let r41 = document.querySelector("#result41");
let site = "네이버";
let url;

switch (site) {
  case "구글":
    url = "www.google.com";
    break;
  case "다음":
    url = "www.daum.net";
    break;
  case "네이버":
    url = "www.naver.com";
    break;
  case "네이트":
    url = "www.nate.com";
    break;
  default:
    "보기 중에 없는 사이트입니다.";
}

if (url) r41.innerHTML = `선택하신 사이트는 ${site}이고 주소는 ${url} `;
else r41.innerHTML = `${site}는 보기에는 없는사이트`;

let r42 = document.querySelector("#result42");

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  if (i % 2 == 0) {
    r42.innerHTML += `${i}는 짝수 <br>`;
  } else {
    r42.innerHTML += `${i}는 홀수 <br>`;
  }
  i++;
};
r42.innerHTML += `1부터 10까지 합계는 ${sum} <br>`
r42.innerHTML += `i는 ${i}`


