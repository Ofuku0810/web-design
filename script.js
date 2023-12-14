document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let searchInput = document.querySelector('.search-form--input');
    let cartItem = document.querySelector('.cart-items-container');

    document.querySelector('#menu-btn').onclick = () => {
        console.log('Menu button clicked!');
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
    }

    searchInput.addEventListener('input', () => {
        let searchTerm = searchInput.value.toLowerCase();
        let boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            let boxTitle = box.querySelector('h3').innerText.toLowerCase();

            if (boxTitle.includes(searchTerm)) {
                box.style.display = 'block'; // show item
            } else {
                box.style.display = 'none'; // hide item
            }
        });
    });

    document.querySelector('#cart-btn').onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }

    window.onscroll = () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }

    // Add this function to your existing JavaScript
    function checkoutNow() {
        console.log('Checkout button clicked!');
        alert('Checkout button clicked! Implement your checkout logic.');
        // You can redirect to a checkout page or handle the checkout process as needed
    }

    // Modify your existing addToCart function
    function addToCart(itemId, itemName, itemPrice) {
        // ... existing logic ...

        // Update the cart display
        updateCartDisplay();

        // Show the checkout button
        const checkoutButton = document.getElementById('checkout-btn');
        checkoutButton.style.display = 'block';
    }

    let searchButton = document.querySelector('#search-btn');

    if (searchButton) {
        searchButton.onclick = () => {
            searchForm.classList.toggle('active');
            let productsSection = document.getElementById('menu');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Products section not found.');
            }
        }
    } else {
        console.error('Element with ID "search-btn" not found.');
    }

    document.querySelector('#shipping-btn').onclick = toggleShippingOptions;

    function toggleShippingOptions() {
        var shippingOptions = document.getElementById('shipping');
        shippingOptions.classList.toggle('hidden');
    }

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById('addressModal');
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById('addressModal');
        modal.style.display = 'none';
    }

    // Function to submit the address (you can customize this function based on your requirements)
    function submitAddress() {
        var addressInput = document.getElementById('addressInput').value;

        // Close the modal after processing
        closeModal();
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function (event) {
        var modal = document.getElementById('addressModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
