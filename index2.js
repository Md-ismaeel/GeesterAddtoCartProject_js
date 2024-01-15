const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
  { id: 4, name: "Product-4", price: 400 },
  { id: 5, name: "Product-5", price: 500 },
  { id: 6, name: "Product-6", price: 600 },
];

const cartItems = [];
const productsList = document.querySelector(".productsList");
const cartList = document.querySelector(".cartList");
const cartText = document.querySelector(".cartText");
const totalPrice = document.querySelector(".totalPrice");



// Update the count of the product and cart section
function renderCart(e, count) {
  e.target.parentNode.children[1].innerText = count;
  let selectedProd = e.target.parentNode.parentNode.children[0].innerText;

  Products.forEach((prod) => {
    if (prod.name === selectedProd) {
      prod.count = count;
    }
  });

  // Update the carts
  cartList.innerHTML = "";
  let total = 0;

  Products.forEach((prod) => {
    if (prod.count > 0) {
      let div = document.createElement("div");
      div.innerHTML = `<p>${prod.name}<p>
        <p><span class="item-count">${prod.count}</span> x <span class="item-price">₹${prod.price}</span></p>`;

      total += prod.count * prod.price;
      div.classList.add("cardBox");
      cartList.appendChild(div);
    }
  });


  totalPrice.innerText = `Total: ₹${total}`;
  totalPrice.style.backgroundColor = "#008585";
  totalPrice.style.padding = "10px 15px";
  // totalPrice.style.color = "white";

  if (cartList.children.length === 0) {
    cartList.appendChild(cartText);
    cartText.innerHTML = `No Product added to the cart`;
    totalPrice.innerText ='';
    totalPrice.style.padding = "0px 0px";
  } 
}



//   click events on buttons for adding and removing carts
productsList.addEventListener("click", (e) => {
  if (e.target.innerText === "+") {
    let count = Number(e.target.parentNode.children[1].innerText);
    count += 1;
    renderCart(e, count);
  } else if (e.target.innerText === "-") {
    let count = Number(e.target.parentNode.children[1].innerText);
    if (count > 0) {
      count -= 1;
      renderCart(e, count);
    } else {
      alert("Action is Not possible!!");
      return;
    }
  }
});


// Adding products in productsList when loading page---
function renderProducts() {
  productsList.innerHTML = "";
  Products.forEach((product) => {
    let listItem = document.createElement("div");
    listItem.innerHTML = `<h4 class="h4">${product.name}</h4>  <p class="p2">₹${product.price}</p>`;

    let prodButton = document.createElement("div");

    prodButton.innerHTML = ` <button class="decremet">-</button>
      <span class="quantity">0</span>
      <button class="incremet">+</button>`;

    productsList.appendChild(listItem);
    listItem.appendChild(prodButton);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
