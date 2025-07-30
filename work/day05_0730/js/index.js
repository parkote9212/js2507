let text = ""
let myTxt = ""

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi", "BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// text += cars[0] + "\n <br>" 
// text += cars[1] + "\n <br>" 
// text += cars[2] + "\n <br>" 
// text += cars[3] + "\n <br>" 
// text += cars[4] + "\n <br>" 
// text += cars[5] + "\n <br>" 


for (let i = 0; i < cars.length; i++) {
    console.log(i);
    console.log(cars[i]);
    document.getElementById("demo").innerHTML += `${cars[i]}<br>`;//  
    myTxt += cars[i]+"\n";
}


console.log(myTxt);