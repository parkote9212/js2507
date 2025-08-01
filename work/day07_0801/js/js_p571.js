// 매개변수 활용
// function addNumber(num1, num2){
//     let sum = num1 + num2 ;
//     // return sum;
//     return num1 + num2;
// }

// let result = addNumber(2, 3);
// document.writeln(`두 수를 더한 값: ${result}`);

function multiple(a,b = 5, c= 10){
    return a*b+c;
    
}

let result1 = multiple(5,5,5);
let result2 = multiple(5,10,20);
let result3 = multiple(2,2,2);
console.log(result1);
console.log(result2);
console.log(result3);