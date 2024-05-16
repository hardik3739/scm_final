// Function to add items to the cart
function addToCart(id, title, price) {
    // Create a new cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <strong>${title}</strong> - ₹${price.toFixed(2)}
        <button onclick="removeFromCart(this, ${price})">Remove</button>
    `;

    // Append the item to the cart
    document.getElementById('cartItems').appendChild(cartItem);

    // Update the total price
    updateCartTotal(price);
}

// Function to remove items from the cart
function removeFromCart(button, itemPrice) {
    // Get the parent div (cart item)
    const cartItem = button.parentNode;

    // Remove the cart item from the cart
    document.getElementById('cartItems').removeChild(cartItem);

    // Update the total price
    updateCartTotal(-itemPrice);
}

// Function to update the total price in the cart
function updateCartTotal(itemPrice) {
    // Get the current total from the span
    const currentTotal = parseFloat(document.getElementById('cartTotal').innerText);

    // Update the total by adding the price of the new item (or subtracting if removing)
    const newTotal = currentTotal + itemPrice;

    // Update the total in the span
    document.getElementById('cartTotal').innerText = newTotal.toFixed(2);
}