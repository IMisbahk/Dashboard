document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add login functionality here (use localStorage for demo)
    alert('Logged in successfully!');
    window.location.href = 'dashboard.html';
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add signup functionality here
    alert('Signed up successfully!');
    window.location.href = 'login.html';
});
