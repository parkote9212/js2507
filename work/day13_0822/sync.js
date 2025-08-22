let r50 = document.querySelector("#result50");


// 함수화 하여 async await 사용
// const ramen = () => (new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("A");
//     console.log("B");
//     resolve(`1단계 완료`);
//   }, 2000);
// }));

// const coffee = () => (new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("E. 커피 장보기");
//     console.log("F. 커피 물 끓이기");
//     reject("커피 품절");
//   }, 4000);
// }));

// const apoint = async () => {
//   try{
//     const result = await ramen();
// console.log(result);
// console.log('C');
// console.log('D');
//    } catch (result) {
//     console.log(result);
// console.log('중단');
// return;  
// }

//   try{
//     const result = await coffee();
// console.log(result);
// console.log('G');
// console.log('H');
//    } catch (result) {
//     console.log(result);
// console.log('coffee중단');
// return;  
// }
//   }

//   apoint();

// 프로미스 객체사용 비동기
// ramen
//   .then((result) => {
//     console.log(result);
//     console.log("C");
//     console.log("D 완료");
//   })
//   .catch((result) => {
//     console.log(result);
//     console.log(`중단`);
//   });



// coffee
//   .then((result) => {
//     console.log("G. 끓는 물에 커피 넣고, 젖기");
//     console.log("H. 커피 완성 후 마시기");
//   })
//   .catch((result) => {
//     console.log(result); //커피 품절
//     console.log("커피 만들기 중단");
//   });

// const pasta = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("파스타 내용 없음");
//   }, 1000);
// });

// setTimeout(() => {
//   console.log("ramen: ", ramen); //PromiseState: "fulfilled"
//   console.log("coffe: ", coffee);
//   console.log("pasta: ", pasta);
// }, 5000);
const AU = "https://jsonplaceholder.typicode.com/users";

function gFU() {
  console.log("FLD");

  fetch(AU)
  .then((r) => {
    console.log(r.status);
    if(!r.ok){
      throw new Error(`er: ${r.status}`);
    }
    return r.json();
  })
  .then((us) => {
    us.slice(0,10).forEach((u,index) => {
      console.log(`${index +1} ${u.name} ${u.address.zipcode} (${u.email})`);
    });
  })
  .catch((error) => {
    console.error("Error fetching", error.message);
  });
}

gFU();
