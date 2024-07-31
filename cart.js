document.addEventListener('DOMContentLoaded', function () {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: ${item.price.toLocaleString()} VND</p>
                <p>Size: ${item.size}</p>
                <label for="quantity${index}">Quantity:</label>
                <input type="number" id="quantity${index}" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                <button class="btn remove-item" onclick="removeItem(${index})">Delete</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceContainer.textContent = totalPrice.toLocaleString();

    // Update the quantity of an item in the cart
    window.updateQuantity = function(index, newQuantity) {
        cartItems[index].quantity = parseInt(newQuantity, 10);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        location.reload();
    };

    // Remove an item from the cart
    window.removeItem = function(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        location.reload();
    };

    // Handle order submission
    document.getElementById('checkout-button').addEventListener('click', function () {
        const name = document.getElementById('customer-name').value;
        const phone = document.getElementById('customer-phone').value;
        const address = document.getElementById('customer-address').value;

        if (name && phone && address) {
            localStorage.removeItem('cartItems');
            alert('Order successful, thank you for trusting and supporting MERCI!');
            location.reload();
        } else {
            alert('Please fill in complete customer information.');
        }
    });
});
