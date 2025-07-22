let counter = 0
 let keypress = []
 document.addEventListener("keydown",()=>{
  keypress.push(new Date())
  let param = new Date()-keypress[0]
 if(param>=3000){
  console.log("hello bro");
  window.location.href="./about.html"
 }
})

