// 양식내 빈칸 확인
//함수선언 
function validateForm() {
    // myform내 fname의 값을 x에 부여
    let x = document.forms["myForm"]["fname"].value;
    // 예외처리
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    document.getElementById("result").innerHTML = x;
}

//1부터 10까지 입력하기
//함수선언
function myFunction() {
    // id numb의 값을 x에 부여
    let y = document.getElementById("numb").value;
    // 출력될 텍스트 선언
    let text;
    // 예외처리
    if (isNaN(y) || y < 1 || y > 10) {
        // 출력
        text = "Input not valid";
    }
    // 아니면 이값 출력
    else {
        text = "Input Ok"
    }
    document.getElementById("result2").innerHTML = text + y;
}
