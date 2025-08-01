// 함수정의하기
let myvar

function addNumber(){
    let a = 8;
    let b = 5;
    let sum = a + b;
    myvar =sum;
    // alert(`결과값 : ${sum}`);
    console.log(`결과값 : ${a+ b}`);
}

// 함수Call : 사용할때는 함수를 부른다.
addNumber();
// console.log(`결과값: ${a+ b}`);
console.log(`결과값 : ${myvar}`);