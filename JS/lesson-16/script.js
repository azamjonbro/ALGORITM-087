
let products = [
    {
       "title":"Iphone 16 pro max",
       "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe rem iste ullam laboriosam et quas quod similique ut",
       "img":"https://picsum.photos/id/20/290/290",
       "price":1299,
       "category":"electronics",
       "rating":4.9,   
       "stock": 10,
       "brand":"Apple",
       "discountPercentage": 999,
       "id": 1
   },
   {
       "title":"Samsung Galaxy S25 Ultra",
       "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe rem iste ullam laboriosam et quas quod similique ut",
       "img":"https://picsum.photos/id/21/290/290",
       "price":1199,
       "category":"electronics",
       "rating":4.8,
       "stock": 15,
       "brand":"Samsung",
       "discountPercentage": 999,
       "id": 2
   }   
   ]




    let createData = localStorage.setItem("products", JSON.stringify(products))
    let getData = localStorage.getItem("products")
    console.log(getData);
    localStorage.removeItem("products")

    console.log(JSON.stringify(products));
    
    
    







//    let productlist = document.querySelector(".product-list")

//    function displayProducts() {
//     let box = document.createElement("div")
//     products.forEach((products) =>{
//         box.innerHTML+=`
//         <div class="card" >
//             <img src="${products.img}" alt="${products.title}">
//             <h2>${products.title}</h2>
//             <p>${products.description}</p>
//             <p>Price: $${products.price}</p>
//             <p>Category: ${products.category}</p>
//             <p>Rating: ${products.rating}</p>
//             <p>Stock: ${products.stock}</p>
//             <p>Brand: ${products.brand}</p>
//             <button class="btn">Add to Cart</button>
//         </div>
//         `

//         box.classList.add("container")
//         productlist.appendChild(box)
//     })
//    }

//    displayProducts()