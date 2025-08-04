//함수선언
function changeBg(color){
//선언
    let result = document.querySelector('#result');
//result의 스타일은 클릭한 함수내 컬러 변수를 받아 넘긴다
    result.style.backgroundColor = color;
    //콘솔에
    console.log(color);
}