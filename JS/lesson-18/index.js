let date = new Date()


let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let millisecond = date.getMilliseconds()
let weekday = date.getDay()
let week = ['Yakshanba','Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', ]
let weekDay = week[weekday]
let century = Math.floor(year - 100) + 1

let allDate= century + "-asr" + year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second+"."+millisecond+" - "+ weekDay

console.log(allDate);


