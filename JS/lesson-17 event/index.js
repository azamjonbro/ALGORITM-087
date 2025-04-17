let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
let taxminiyson = 0;
let button = document.querySelector(".button");
let box = document.querySelector(".box");


button.addEventListener("click", function() {
    taxminiyson = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[taxminiyson];
})


box.addEventListener("mouseenter", function() {
    let h2 =document.createElement("h2")
    h2.innerHTML = colors[taxminiyson];
    box.appendChild(h2);
})