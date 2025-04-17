// "use strict"

// // let a = 9007199254740991
// let b = null

// // !a==null -> true qiymat qaytmoqda

// let a = prompt(`tug'ulgan yilingizni yozing`)

// let date = new Date().getFullYear()

// alert(date-a)

// let a = Number(prompt("birinchi sonni yozing"))
// let b = Number(prompt("ikkinchi sonni yozing"))
// let amal = prompt("amalni yozing")

// if(amal =='kupaytir'){
//     alert(a*=b)
// }
// else if(amal =="qush"){
//     alert(a+=b)
// }
// else if(amal =='ayir'){
//     alert(a-=b)
// }
// else if(amal=='bul'){
//     alert(a/=b)
// }

let a = Number(prompt("birinchi sonni yozing"));
let amal = prompt("amalni yozing");

if (amal !== "kub" && amal !== "kvadrat") {
    let b = Number(prompt("ikkinchi sonni yozing"));
    if (amal == "qush") {
        a += b;
    } else if (amal == "ayir") {
        a -= b 
    } else if (amal == "bul") {
        a /= b
    }
} else {
    if (amal == "kub") {
        a = a * a * a;
    } else if (amal == "kvadrat") {
        a *= a;
    }
}
console.log(a);
