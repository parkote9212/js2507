// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML =
//     'The first paragraph (index 0) with class="intro" is: ' +
//     x[0].innerHTML;
//     x[0].style.backgroundColor = "yellow";
// document.getElementById("demo1").innerHTML =
//     'The first paragraph (index 1) with class="intro" is: ' +
//     x[1].innerHTML;
//     x[1].style.backgroundColor = "green";
    
const x = document.querySelectorAll("p");
for(let i=0; i < x.length; i++){
    if(i % 2 === 0){
        x[i].style.backgroundColor = "green";
    }
    else{
        x[i].style.backgroundColor = "yellow";
    }
}
