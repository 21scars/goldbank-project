function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your authentication logic here
    if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Check login status on protected pages
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.href.includes('index.html')) {
        window.location.href = 'index.html';
    }
}

// Run check on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);
