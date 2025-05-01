// let uygavazifa = new Promise((resolve, reject) => {
//     let uyishim = true;
//     if (uyishim) {
//         resolve("Uygavazifa bajarildi");
//     } else {
//         reject("Uygavazifa bajarilmadi");
//     }
// });

// uygavazifa.then((message) => {
//     console.log(message);

//     console.log("go endi yangi dars o'tamiz");
    
// }
// ).catch((error) => {
//     console.log(error);
//     console.log("Qo'yselarchi endi uyga vazifani shu yerda qilishimiz kerak");
    
// });













// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Xatolik:", error);
// })















// const character ={
//     name:"Azizbek",
//     age: 16,
//     profession: "Web dasturchi",
//     skills: ["HTML", "CSS", "JavaScript"],
//     height:167,
//     Nation:"Uzbek"
// }

// const student = character

// student.name = "Islom"
// student.age = 15
// student.profession = "Professional Web dasturchi"
// student.skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Figma", "Photoshop"]
// student.height = 153
// student.Nation = "Russian"

// console.log(character);

// const data ={
//     title: "Yangi maqola",
//     body: "Bu maqola yangi mavzuda yozilgan",
//     userId: 1,
//     greet: function(){
//         console.log("Salom Sherzodbek va beklar !");
//     }
// }

let input = document.querySelector("#password");
let button = document.querySelector("#submit");

try{
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if(input.value.length < 8){
            alert("Parol kamida 8 ta belgidan iborat bo'lishi kerak");
        }
        else{
            console.log("Parol to'g'ri kiritildi");
        }
    })
}
catch(error){
    alert("Xatolik:", error);
}

