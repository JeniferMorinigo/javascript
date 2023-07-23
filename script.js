var cart = [];

function addToCart(price) {
  cart.push(price);
  updateCart();
}

function updateCart() {
  var cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "<h2>Items en el carrito:</h2>";

  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    cartDiv.innerHTML += "<p>Producto " + (i + 1) + ": $" + cart[i] + "</p>";
    total += cart[i];
  }

  if (cart.length === 0) {
    cartDiv.innerHTML += "<p>El carrito está vacío</p>";
  } else {
    cartDiv.innerHTML += "<h3>Total: $" + total + "</h3>";
  }
}