function addToCart(productName, productPrice, productSize, productImage) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.name === productName && item.size === productSize);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
    } else {
        cartItems.push({
            name: productName,
            price: productPrice,
            size: productSize,
            image: productImage,
            quantity: 1
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Add to cart successfully');
}
