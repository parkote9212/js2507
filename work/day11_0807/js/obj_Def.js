const person1 = {
    firstName: "John",
    lastName: "Doe",
    age : 50,
    eyeColor: "blue"
};

const person2 = new Object({
    firstName: "John2",
    lastName: "Doe2",
    age : 15,
    eyeColor: "blue2"
});

const person3 = {
    firstName: "John3",
    lastName: "Doe3",
    age : 40,
    eyeColor: "blue3"
};

const man = Object.create(person3)
man.firstName = "Peter4"
man.etc = "etc"

const man2 = {firstName : "Anee"}
Object.assign(person3,man2);
//------------------ -----------
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 300]
]


const myObj = Object.fromEntries(fruits)
myObj.etc = "etc"

//------------------ -----------
function Person(first, last, age, eye){
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}

const man1  = new Person("근철","박",32,"brown");
// 클래스:책

function Book(title,sub,won,page){
    this.title = title
    this.subj = sub
    this.price = won
    this.pages = page
}

const book1 = new Book("리액트","한빛","35,000","300P")
const book2 = new Book("리액트","한빛","35,000","300P")
const book3 = new Book("리액트","한빛","35,000","300P")