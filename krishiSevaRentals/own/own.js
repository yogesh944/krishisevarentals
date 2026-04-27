document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Demo username and password
    const demoUsername = "farmer123";
    const demoPassword = "rent123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === demoUsername && password === demoPassword) {
        // Redirect to the admin page
        window.location.href = "admin.html"; // Replace with your admin page URL
    } else {
        document.getElementById('errorMessage').textContent = "Invalid Username or Password!";
    }
});
