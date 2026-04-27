// cart.js
let cart = [];

function addToCart() {
  // Get the product details
  let product = prompt("Enter the product name:");
  let price = prompt("Enter the product price:");
  let quantity = prompt("Enter the quantity:");

  // Create a product object
  let productObject = {
    name: product,
    price: price,
    quantity: quantity
  };

  // Add the product to the cart
  cart.push(productObject);

  // Display the cart
  displayCart();
}

function displayCart() {
  let cartHtml = "";
  for (let i = 0; i < cart.length; i++) {
    cartHtml += `
      <p>Product: ${cart[i].name}</p>
      <p>Price: ${cart[i].price}</p>
      <p>Quantity: ${cart[i].quantity}</p>
    `;
  }
  document.getElementById("cart-items").innerHTML = cartHtml;
}