



// console.log("hello bolalar"); // stack

// if(true){
//  console.log("ikkinchi");
// }



// setTimeout(()=>{
//  console.log("hello uchinchi bollar");
// },0) // macrotask

// console.log('baribir ikkinchida chiqaman'); //stack

// try {
 
// } catch (error) {
 
// }
// finally{

// }

// let arr = ["saloM", "alik", 'Hello']

// let newArr =arr.filter((e)=> e==e.toLowerCase())

// console.log(newArr);


let arr = [1,2,3,4,5,6,7,8,9]

let newarr = arr.slice(arr.length/2-1, arr.length/2+2)
console.log(newarr);

//&& har doim false qiymatlarni qidiradi || yoki har doim true qiymatni qidiradi

// console.log("a"&&0||"b"&&NaN);
// console.log(NaN && ""|| ""&&0||"a"&&null);

console.log("a" && 1 || null &&undefined);
// console.log(undefined && 1 || 1 &&  null || null && "");

console.log(""||1&&""||3);
// && ikkita true qiymat kelib qolsa eng ohiridagisini qaytaradi
//|| ikkita false qiymat kelib qolsa eng ohiridagisini qaytaradi


// ketma ketlik birinchi qiymatlardan undefinedni oldi
// ikkinchi qiymatlardan null ni oldi
// uchinchi qiymatlardan null ni oldi
// tortinchi undefined bilan nullni tekshirdi null 
// chiqdi va null va nullni tekshirdi javob nullga teng boldi



