// create product functions

let addButton = document.querySelector(".add")
let productSection = document.querySelector(".product-section")
let mainPage = document.querySelector(".main")

// new section create models
let newSection = document.createElement("section")
newSection.classList.add("add-product")

addButton.addEventListener("click", function() {
    productSection.style.display="none"

    newSection.innerHTML=`
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

const createProductFunction = ()=>{
    let productForm = document.querySelector(".product-form")
    let book ={
        title: productForm.querySelector("#product-title").value.trim(),
        description : productForm.querySelector("#textarea").value.trim(),
        price:productForm.querySelector("#product-price").value.trim(),
        quantity:productForm.querySelector("#product-quantity").value.trim(),
        image:`https://picsum.photos/id/${productForm.querySelector("#product-image").value.trim()}/300/300`
    }
    fetch("http://localhost:3000/books",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(book)
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })
    
}




// bu yerdan boshlab endi mahsulotlarni oynaga joylaymiz

let productList = document.querySelector(".product-list")

async function getProducts() {
    try {
        const res = await fetch("http://localhost:3000/book");
        const data = await res.json();
        data.forEach((e)=>{
            productList.innerHTML+=`
            <div class="product">
                        <div class="product-image">
                            <img src="${e.image}" alt="${e.title}">
                        </div>
                        <div class="product-info">
                            <h3 class="prouct-title">${e.title}</h3>
                            <p class="product-desc">${e.description}</p>
                            <span class="price">$${e.price}</span>
                            <div class="product-btnbox">
                                <button class="add-to-cart">Add to Cart</button>
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