// const person = {
//   name: "Ali",
//   age:21,
//   weight:78
// };

// function greet() {
//   console.log("Salom, " + this.name + " " + "sening og'irligin: " + this.weight + "kg");
// }

// const boundGreet = greet.bind(person);
// boundGreet(); // Salom, Ali


// let obj = {
//  name:"Oygul",
//  greet: function(){
//   console.log(this.name)
//  }
// }


// const person = {
//   name: "Muhammadyusuf",
// };
// // destructure bu object ichidagi qiymatlarni yoyish yoki ichidagi key value qiymatlarni yechib olish
// function introduce(age, job) {
//   console.log(`Men ${this.name}, ${age} yoshdaman. Kasbim: ${job}`);
// }

// introduce.apply(person, [25, "dasturchi"]);
// // Men Vali, 25 yoshdaman. Kasbim: dasturchi

// function data({name, job}){
//  // let {name, job} = e
//  console.log(name, job);
 
// }
// data({name:"Ali",job: "dasturchi"})
// yoyish bu function ichida qiymatlarni qaysidir o'zgaruvchiga tenglamasdan qabul qilish 
// qabul qilish deganda index yoki key valuega asoslanib ketma ketlikda qafasdan chiqarib olish hisoblanadi



import localeString from './date.js';// module

let newDate = new Date()
let data = localeString(newDate)
console.log(data);

// const localeString = require("./date.js")// common js
