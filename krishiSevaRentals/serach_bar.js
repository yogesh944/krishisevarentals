document.addEventListener("DOMContentLoaded", function () {
    // Get the input field and add an event listener for keyup
    var searchInput = document.getElementById("quick_search");
    searchInput.addEventListener("keyup", function () {
        // Get the search query from the input field
        var searchQuery = searchInput.value.toLowerCase();

        // Get all product sections
        var productSections = document.querySelectorAll(".product-section");

        // Loop through each product section
        productSections.forEach(function (section) {
            // Get the section title
            var sectionTitle = section.querySelector("h1").textContent.toLowerCase();

            // Get all product boxes within the section
            var productBoxes = section.querySelectorAll(".box");

            // Loop through each product box
            productBoxes.forEach(function (box) {
                // Get the product name within the box
                var productName = box.querySelector("h3").textContent.toLowerCase();

                // Check if the search query matches the section title or product name
                if (sectionTitle.includes(searchQuery) || productName.includes(searchQuery)) {
                    // Show the product box if it matches
                    box.style.display = "block";
                } else {
                    // Hide the product box if it doesn't match
                    box.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.getElementById("cart-items");

    // Add event listeners to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productBox = button.parentElement;
            const productName = productBox.querySelector("h3").textContent;

            // Add product to cart
            addToCart(productName);
            updateCartDisplay();
        });
    });

    // Function to add product to cart
    function addToCart(productName) {
        if (!cartItems.includes(productName)) {
            cartItems.push(productName);
        }
    }

    // Function to update cart display in the cart section
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";

        cartItems.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.textContent = item;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // Checkout function
    window.checkout = function() {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add some items to proceed.");
        } else {
            let checkoutDetails = "You are purchasing the following items:\n\n";

            cartItems.forEach(item => {
                checkoutDetails += `- ${item}\n`;
            });

            alert(checkoutDetails + "\n\nThank you for your purchase!");
            // In a real scenario, you would redirect the user to a payment gateway here.
        }
    };
});
