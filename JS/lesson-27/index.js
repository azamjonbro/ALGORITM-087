// create product functions

let addButton = document.querySelector(".add")
let productSection = document.querySelector(".product-section")
let mainPage = document.querySelector(".main")

// new section create models
let newSection = document.createElement("section")
newSection.classList.add("add-product")

addButton.addEventListener("click", function () {
    productSection.style.display = "none"

    newSection.innerHTML = `
    <div class="container">
        <form class="product-form">
            <input type="text" id="product-title" placeholder="create title" require title="product title"/>
            <input type="number" id="product-price" placeholder="create price" require title="product price"/>
            <input type="number" id="product-quantity" placeholder="create quantity" require title="product quantity"/>
            <input type="number" id="product-image" placeholder="enter product images link" title="product image"/>
            <textarea cols="10" rows="5" style="resize:none;" id="textarea"></textarea>
            <button onclick="createProductFunction()" class="create-product">Create product</button>
        </form>
    </div>
    
    `
    mainPage.appendChild(newSection)

})

// form menularni o'zgaruvchilarga tenglash

let createProduct = document.querySelector(".create-product")

const createProductFunction = () => {
    let productForm = document.querySelector(".product-form")
    let book = {
        title: productForm.querySelector("#product-title").value.trim(),
        description: productForm.querySelector("#textarea").value.trim(),
        price: productForm.querySelector("#product-price").value.trim(),
        quantity: productForm.querySelector("#product-quantity").value.trim(),
        image: `https://picsum.photos/id/${productForm.querySelector("#product-image").value.trim()}/300/300`
    }
    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })

}




// bu yerdan boshlab endi mahsulotlarni oynaga joylaymiz

let productList = document.querySelector(".product-list")

async function getProducts() {
    try {
        const res = await fetch("http://localhost:3000/book");
        const data = await res.json();
        data.forEach((e) => {
            productList.innerHTML += `
            <div class="product">
                        <div class="product-image">
                            <img loading="lazy" width="100%" src="${e.image}" alt="${e.title}">
                        </div>
                        <div class="product-info">
                            <h3 class="prouct-title">${e.title}</h3>
                            <p class="product-desc">${e.description.slice(0,30)}</p>
                            <span class="price">$${e.price}</span>
                            <div class="product-btnbox">
                                <button class="add-to-cart" onclick="addToCart(${e.id})">Add to Cart</button>
                                <button class="add-to-cart">Add to loves</button>
                            </div>
                        </div>
                    </div>
            
            `
        })
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}

getProducts();



// shop menu tugmasi bosilganida menu ochilishi uchun kerak boladigan funksiya

let menubox = document.querySelector(".selected")
document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
    menubox.classList.toggle("active-menu")
})

// let body = document.querySelector("body")

// body.addEventListener("click", (e) => {
//     console.log(e.target.className);
    
//     if (e.target.className == 'selected active-menu' || e.target.className == "fa-solid fa-shopping-cart") {
//         menubox.classList.add("active-menu")
//     } else {
//         menubox.classList.remove("active-menu")
//     }
// })


// localstoragedan mahsulotlarni olish

let allProduct = JSON.parse(localStorage.getItem("products")) || []
function getProductsFromLocalStorage() {
    if(allProduct.length<100){
        document.querySelector('.count').innerHTML=allProduct.length
    }
    else{
        document.querySelector('.count').innerHTML="99+"
    }
    if (allProduct) {
        allProduct.reverse()
        allProduct.forEach((e) => {
            let selectedProduct = document.createElement("div")
            selectedProduct.classList.add("selectedproduct")
            selectedProduct.innerHTML = `
            <div class="imgbox">
            <img src="${e?.image}" width="100" height="100" alt="${e?.title}" title="${e?.title}" loading="lazy">
            </div>
            <div class="selected-info">
            <div class="left">
            <h2>${e?.title?.slice(0,10)}</h2>
            <p>${e?.description?.slice(0,25)}</p>
            </div>
            <div class="right" style="display:flex; flex-direction:column;">
            <div>
                <b>${e.price*e.count}</b>
            </div>
            <div class="bottom">
                <button onclick="decrement(${e.id})">-</button>
            <b>${e.count}</b>
            <button onclick="increment(${e.id})">+</button>
            </div>
            </div>
            </div>
            `
            menubox.appendChild(selectedProduct)
            menubox.innerHTML+=`
                <div class="menu-btnbox">
                    <b>12345678</b>
                    <button onclick="sendTelegramBot()">buy</button>
                </div>
            `
        })
    }
    else {
        menubox.innerHTML += "<p>Not selected product</p>"
    }
}

getProductsFromLocalStorage()


// mahsulotlarni savatchaga qo'shish

async function addToCart(element) {
    try {
       const res = await fetch("http://localhost:3000/book");
        const data = await res.json();
        let oneProduct = data.find((e) => { return e?.id == element }) 
        
        
        let existingProduct = allProduct.find((e) => e.id == element);
        if (existingProduct) {
            existingProduct.count += 1;
        } else {
            oneProduct.count = 1;
            allProduct.push(oneProduct);
        }
        localStorage.setItem('products', JSON.stringify(allProduct));
        document.querySelector('.count').innerHTML=allProduct.length
    }
    catch (e) {
        console.log(e);
    }
}
// shop ichidagi tovarlar ortishi yoki kamayishi uchun ishlaydigan functionlar

function increment(id){
    let searchedProduct =allProduct.find((e)=> e.id==id)
    
    searchedProduct.count++
    localStorage.setItem('products', JSON.stringify(allProduct));
}

function decrement(id){
    let searchedProduct =allProduct.find((e)=> e.id==id)
    if(searchedProduct.count>0){
        searchedProduct.count--
    }
    else{
        allProduct= allProduct.filter((a)=>a.count>0)
        console.log(allProduct);
        
    }
    localStorage.setItem('products', JSON.stringify(allProduct));
}

 function sendTelegramBot(){
    let allPrice = allProduct.reduce((a, acc)=> a.price+acc)
    console.log(allPrice);
    
    let products ={
        quantity: allProduct.reduce((e,acc)=> e.count+acc,0),
    }
    let TELEGRAM_BOT_TOKEN ="7179751378:AAGKQ0vgurJjjzBVsHiybs1PMcuu5PbYMGA"
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,{
        method: 'POST',
        headers:{"ContentType":"application/json"},
        body:JSON.stringify()
    })

 }