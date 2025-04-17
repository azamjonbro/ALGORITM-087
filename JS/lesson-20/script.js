

// async fetch("https://fakestoreapi.com/products")
// .then((response)=>response.json())
// .then((data)=>{
    //     console.log(data);
    //     await products.push(data)
//     console.log(products);
    
// })
// .catch((error)=>{console.log("bu catchdan kelgan hatolik"+error)
// })


let productList = document.querySelector(".product-list")

productList.style.display="flex"
productList.style.flexWrap="wrap"
productList.style.gap="40px"
async function fetchAllProduct() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json(); 
    data.forEach((element)=>{
        console.log(element);
        
        let box = document.createElement("div")
        box.classList.add("product") 
        box.style.width="300px"
        box.style.height="30%"
        
        box.innerHTML=`
            <div class="product-imgbox">
                <img src="${element.image}" width="300" height="300" alt="${element.title}" />
            </div>
            <div class="product-contentbox">
                <h2>${element.title.slice(0,15)} ...</h2>
                <p>${element.description.slice(0,40)} <a href="#">more info</a></p>
                <b><i class="fa-solid fa-box"></i> Bizda bor ${element.rating.count} ta</b>
                <p>${element.price-1} $</p>
                
            </div>
        `
        productList.appendChild(box)
    })
    
}
// fetchAllProduct()


let input = document.querySelector('.input'

)
input.addEventListener("change",(event)=>{
    console.log(event);
    
    inputvalue = event?.target?.value
    
})

let body = document.querySelector("body")

body.addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    
    if(e.keyCode==27){
        input.value=''
    }
})

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); 

    const menu = document.getElementById("myMenu");
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
    menu.style.display = "block";
});

document.addEventListener("click", function () {
    document.getElementById("myMenu").style.display = "none";
});
