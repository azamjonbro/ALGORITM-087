// let a = ["salom", "alik", "islomjon, salom , salom, sallom"];

// // a[2]="Sherzodbek"

// // a.pop()

// a.unshift("Diyora");

// a.shift()

// console.log(a.indexOf("alik"));
// console.log(a.lastIndexOf("alik"));

// console.log(a.find((islom) => islom == "salom, alik"));

const students = [
  { id: 1, name: "Anvar", age: 17, coin: 100 },
  { id: 2, name: "Sarvar", age: 20, coin: 120 },
  { id: 3, name: "Kamron", age: 21, coin: 89 },
  { id: 4, name: "Anvar", age: 22, coin: 70 },
];

let inputName = prompt("ism kiriting");

// const result = students.find((student) => {
//   return student.name.toLowerCase() == inputName.toLowerCase();
// });

// const result = students.findIndex((student) => {
//   return student.name.toLowerCase() == inputName.toLowerCase();
// });

// const result = students.findLast((student) => {
//   return student.name.toLowerCase() == inputName.toLowerCase();
// });

// const result = students.findLastIndex((student) => {
//   return student.name.toLowerCase() == inputName.toLowerCase();
// });

const result = students.filter((student) => {
  return student.name.toLowerCase() == inputName.toLowerCase();
});frdfsdfxcr

console.log(result || "Not Found");

// console.log(a);
