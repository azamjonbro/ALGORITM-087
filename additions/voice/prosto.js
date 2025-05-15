let sliderarr = [
  "https://picsum.photos/id/229/500/500",
  "https://picsum.photos/id/223/500/500",
  "https://picsum.photos/id/231/500/500",
  "https://picsum.photos/id/222/500/500",
  "https://picsum.photos/id/227/500/500",
  "https://picsum.photos/id/226/500/500",
];
let slider = document.querySelector(".slider-imgbox");
let birinchislide = 0;
function sliders(){
 sliderarr.forEach((e, index) => {
  let img = document.createElement("img");
  img.src = e;
  img.id = index;
  if(index==birinchislide){
   slider.appendChild(img);
  }
});
}
sliders()


document.querySelector(".next").addEventListener("click", (e) => {
  e.preventDefault();
  birinchislide++
  sliders()
});
document.querySelector(".prev").addEventListener("click", (e) => {
  e.preventDefault();
  birinchislide--
  sliders()
});
// fetch("https://api.escuelajs.co/api/v1/products")
// .then((res)=> res.json())
// .then((data)=>{
//  console.log(data);
// })


window.addEventListener("scrollY",(e)=>{
 console.log(e);
 
})
console.log(window.scrollY);
console.log(window.location.pathname);
