let btn = document.querySelector('.btn-success');
let overview = document.querySelector('.overview');
btn.addEventListener('click', function() {
  overview.style.display = 'flex';
});

overview.addEventListener('click', function(event) {
 console.log(event.target);
 if(event.target.classList=='overview') {
   overview.style.display = 'none';
 }
})

// let productList = document.querySelector(".productlist");
// function showProduct(products) {
//   productList.innerHTML = "";
//   products.length == 0
//     ? (productList.innerHTML = "Product not found")
//     : products.forEach((item, index) => {
//         let product = document.createElement("div");
//         product.classList.add("product");

//         product.innerHTML += `
//         <img width="400px" src="${item.image}" alt="${item.title}"/>
//         <h2>${item.title}</h2>
//       `;
//         productList.appendChild(product);
//       });
// }

// let allproduct = [];
// function getProducts() {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       allproduct = data;
//       showProduct(allproduct);
//     });
// }
// getProducts();

// let input = document.querySelector("#searchInput");

// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   let qiymat = event.target.value.toLowerCase();

//   let filtered = allproduct.filter((item) =>
//     item.title.toLowerCase().includes(qiymat)
//   );
//   showProduct(filtered);
// });
