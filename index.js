// const Products = [
//   { id: 1, name: "Product-1", price: 100 },
//   { id: 2, name: "Product-2", price: 200 },
//   { id: 3, name: "Product-3", price: 300 },
// ];

// const cartItems = [];
// const productsList = document.querySelector(".productsList");
// const cartList = document.querySelector(".cartList");
// const cartText = document.querySelector(".cartText");
// const totalPrice = document.querySelector(".totalPrice");

// // Adding products in productsList when loading page---
// function renderProducts() {
//   productsList.innerHTML = "";
//   Products.forEach((product) => {
//     let listItem = document.createElement("div");
//     listItem.innerHTML = `<h3 class="h3">${product.name}</h3>  <p class="p2">₹${product.price}</p>`;

//     let prodButton = document.createElement("div");

//     prodButton.innerHTML = ` <button class="decremet">-</button>
//     <span class="quantity">0</span>
//     <button class="incremet">+</button>`;

//     productsList.appendChild(listItem);
//     listItem.appendChild(prodButton);
//   });
// }

// // Update the count of the product and cart section
// function renderCart(e, count) {
//   e.target.parentNode.children[1].innerText = count;
//   let selectedProd = e.target.parentNode.parentNode.children[0].innerText;

//   Products.forEach((prod) => {
//     if (prod.name === selectedProd) {
//       prod.count = count;
//     }
//   });

//   // Update the carts
//   cartList.innerHTML = "";
//   let total = 0;

//   Products.forEach((prod) => {
//     if (prod.count > 0) {
//       let div = document.createElement("div");
//       div.innerHTML = `<p>${prod.name}<p>
//       <p><span class="item-count">${prod.count}</span> x <span class="item-price">${prod.price}</span></p>`;

//       total += prod.count * prod.price;
//       div.classList.add("product-card");
//       cartList.appendChild(div);
//     }
//   });

//   if (cartList.children.length === 0) {
//     cartList.appendChild(cartText);
//     totalPrice.innerText = `total: ${total}`;
//   }
// }

// productsList.addEventListener("click", (e) => {
//   if (e.target.innerText === "+") {
//     let count = Number(e.target.parentNode.children[1].innerText);
//     count += 1;
//     renderCart(e, count);

//   } else if (e.target.innerText === "-") {
//     let count = Number(e.target.parentNode.children[1].innerText);
//     if (count > 0) {
//       count -= 1;
//       renderCart(e, count);

//     } else {
//       alert("Action is Not possible!!");
//       return;
//     }
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   renderProducts();
// });