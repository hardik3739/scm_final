
 function addToCart(id, title, price) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <strong>${title}</strong> - ₹${price.toFixed(2)}
        <button onclick="removeFromCart(this, ${price})">Remove</button>
    `;
    document.getElementById('cartItems').appendChild(cartItem);
    updateCartTotal(price);
}
function removeFromCart(button, itemPrice) {
    const cartItem = button.parentNode;
    document.getElementById('cartItems').removeChild(cartItem);
    updateCartTotal(-itemPrice);
}
function updateCartTotal(itemPrice) {
    const currentTotal = parseFloat(document.getElementById('cartTotal').innerText);
    const newTotal = currentTotal + itemPri
    document.getElementById('cartTotal').innerText = newTotal.toFixed(2);
}