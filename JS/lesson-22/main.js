// let a = 10
// let b =30
// global scope

// function son (){
//     // function or locale scope
//     let b = 3

//     if(b = 3){
//         //block scope
//         let ali = 1
//     }
// }
// console.log(a);



let arr = [1, 2, 3, 4, 5, 6, 7]

// arr.push(["azizbek"])

// arr.pop()

// let newarr = arr.concat('azizbek')
// splice bu bizga kerakli qiymatni qirqib olib yangi array sifatida qaytarib beradi.

// arr = arr.splice(3,2)

// qiymatni o'zini qaytaradi 
// arr = arr.slice(1,4)
// console.log(arr);


// for (let i = 0; i <= 10; i++) {
//     console.log(i);

// }

// let obj = [
//     {
//         name:"Laylo",
//         age:19,
//         character:"polite",
//         style:"pretty",
//         hairColor:"purple",
//         weight:50,
//         height:165
//     },
//     {
//         name:"Natasha",
//         age:19,
//         character:"bad",
//         style:"ugly",
//         hairColor:"purple",
//         weight:50,
//         height:195
//     },
// ]


// for (const element of obj){
//     const {name,age, style, hairColor,weight,height} = element

//     console.log(name,age,style,height);
    
// }


// let object =  {
//     name:"Natasha",
//     age:19,
//     character:"bad",
//     style:"ugly",
//     hairColor:"purple",
//     weight:50,
//     height:195
// }
// console.log(document);

// console.log(Object.keys(document["#document"]).length);
// console.log(Object.keys(document["#document"]).length);


let allProps = [];
let obj = document;

do {
  allProps = allProps.concat(Object.getOwnPropertyNames(obj));
  obj = Object.getPrototypeOf(obj);
} while (obj);

let uniqueProps = [...new Set(allProps)];
console.log(uniqueProps.length); 


// for (const key in object) {
    
// }