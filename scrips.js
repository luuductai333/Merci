// script.js
function searchProduct() {
    const searchBox = document.getElementById('search-box');
    const searchQuery = searchBox.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.getAttribute('data-name');
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
