let products = [
  {
    id: 1,
    name: "iphone 14",
    price: 1000,
    stock: 10,
    description: "Latest iPhone model with advanced features.",
    image: "https://picsum.photos/id/1/200/300",
    category: "electronics",
    rating: 4.5,
    reviews: 100,
    discount: 10,
    brand: "Apple",
    color: "black",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 900,
    stock: 5,
    description: "Latest Samsung model with advanced features.",
    image: "https://picsum.photos/id/2/200/300",
    category: "electronics",
    rating: 4.0,
    reviews: 50,
    discount: 15,
    brand: "Samsung",
    color: "blue",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 2000,
    stock: 8,
    description: "Latest MacBook model with advanced features.",
    image: "https://picsum.photos/id/3/200/300",
    category: "electronics",
    rating: 4.8,
    reviews: 200,
    discount: 20,
    brand: "Apple",
    color: "silver",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1500,
    stock: 3,
    description: "Latest Dell model with advanced features.",
    image: "https://picsum.photos/id/4/200/300",
    category: "electronics",
    rating: 4.2,
    reviews: 75,
    discount: 5,
    brand: "Dell",
    color: "black",
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    price: 350,
    stock: 20,
    description: "Latest Sony headphones with advanced features.",
    image: "https://picsum.photos/id/5/200/300",
    category: "electronics",
    rating: 4.7,
    reviews: 150,
    discount: 10,
    brand: "Sony",
    color: "black",
  },
  {
    id: 6,
    name: "Bose QuietComfort 35 II",
    price: 300,
    stock: 15,
    description: "Latest Bose headphones with advanced features.",
    image: "https://picsum.photos/id/6/200/300",
    category: "electronics",
    rating: 4.6,
    reviews: 120,
    discount: 5,
    brand: "Bose",
    color: "silver",
  },
  {
    id: 7,
    name: "iPad Pro",
    price: 1200,
    stock: 7,
    description: "Latest iPad model with advanced features.",
    image: "https://picsum.photos/id/7/200/300",
    category: "electronics",
    rating: 4.9,
    reviews: 180,
    discount: 15,
    brand: "Apple",
    color: "white",
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S7",
    price: 800,
    stock: 4,
    description: "Latest Samsung tablet with advanced features.",
    image: "https://picsum.photos/id/8/200/300",
    category: "electronics",
    rating: 4.3,
    reviews: 60,
    discount: 10,
    brand: "Samsung",
    color: "black",
  },
];

let savedProducts = localStorage.setItem("products", JSON.stringify(products));

let ProductList = document.querySelector(".product-list");
let allProduct = JSON.parse(localStorage.getItem("products")) || [];

allProduct.forEach((product) => {
  let box = document.createElement("div");
  box.classList.add(".product");

  box.innerHTML = `
        <div class="product-imgbox" style="display: flex;">
                <img src="${
                  product.image
                }" width="300" height="300" loading="lazy" alt="${
    product.name
  }">
                <svg onclick="addLoves(${product.id})" class="love" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                    <path d="M34.5143 8.81571C33.9758 7.56872 33.1992 6.4387 32.2282 5.48892C31.2564 4.53631 30.1106 3.77929 28.8532 3.25901C27.5493 2.71738 26.1508 2.44014 24.7389 2.44339C22.7581 2.44339 20.8255 2.9858 19.146 4.01035C18.7442 4.25544 18.3626 4.52464 18.0009 4.81794C17.6393 4.52464 17.2576 4.25544 16.8559 4.01035C15.1764 2.9858 13.2438 2.44339 11.263 2.44339C9.83666 2.44339 8.45451 2.7166 7.14871 3.25901C5.8871 3.78133 4.75005 4.53267 3.77371 5.48892C2.80137 6.43763 2.02465 7.56791 1.48755 8.81571C0.929067 10.1135 0.643799 11.4916 0.643799 12.9099C0.643799 14.2479 0.917013 15.642 1.45942 17.0604C1.91344 18.2456 2.56433 19.4751 3.39603 20.7166C4.71389 22.6813 6.52594 24.7304 8.77594 26.8077C12.5045 30.251 16.1969 32.6296 16.3536 32.726L17.3059 33.3367C17.7277 33.6059 18.2701 33.6059 18.692 33.3367L19.6442 32.726C19.8009 32.6255 23.4893 30.251 27.2219 26.8077C29.4719 24.7304 31.284 22.6813 32.6018 20.7166C33.4335 19.4751 34.0884 18.2456 34.5384 17.0604C35.0809 15.642 35.3541 14.2479 35.3541 12.9099C35.3581 11.4916 35.0728 10.1135 34.5143 8.81571ZM18.0009 30.1586C18.0009 30.1586 3.69737 20.9938 3.69737 12.9099C3.69737 8.81571 7.08442 5.49696 11.263 5.49696C14.2 5.49696 16.7474 7.13624 18.0009 9.53089C19.2545 7.13624 21.8018 5.49696 24.7389 5.49696C28.9175 5.49696 32.3045 8.81571 32.3045 12.9099C32.3045 20.9938 18.0009 30.1586 18.0009 30.1586Z" fill="white" fill-opacity="0.7"/>
                    </svg>
            </div>
            <div class="product-contentbox">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <b><del>${product.price + 70}</del></b>
                <b class="price">${product.price - 1}</b>
                <div class="product-btnbox">
                    <button class="product-btn">Buy</button>
                    <button class="product-btn">Add to cart</button>
                </div>
            </div>
    `;

  ProductList.appendChild(box);
});

let loves = []


function addLoves(id){
  let oneProduct = allProduct.find(item=>item.id==id)
  let yoqtirilganlar = loves.find(item => item.id ==id)

  if(yoqtirilganlar){
    alert("bu mahsulot allaqachon tanlangan")
  }
  else{
    loves.push(oneProduct)
  }
  
  localStorage.removeItem("loves")

  localStorage.setItem("loves",JSON.stringify(loves))
}