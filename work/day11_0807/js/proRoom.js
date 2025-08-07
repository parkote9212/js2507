//과목함수 선언
function Course(subject, content) {
    this.name = subject;
    this.content = content;
}
// 수업함수 선언
function Class(date, round, title, link) {
    this.date = date;
    this.round = round;
    this.title = title;
    this.link = link;
}
// 수업 할당
const class1 = new Class("0807", "11차", "JS,리액트사용 객체", "./index0807.html");
document.getElementById("class1").innerHTML = class1.date;
document.getElementById("class2").innerHTML = class1.title;

//과목할당
const course1 = new Course("JavaScript", class1);
//과목의 이름은
document.getElementById("course1").innerHTML = course1.name;
//실패: 과목의 수업(배열)호출
document.getElementById("course2").innerHTML = course1.content;
document.getElementById("result").innerHTML = course1.content.round;

