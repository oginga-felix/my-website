// Toggle info section visibility
function toggleInfo() {
  const info = document.getElementById('info');
  
  if (!info) {
    console.error('Element with id "info" not found');
    return;
  }
  
  if (info.style.display === 'none') {
    info.style.display = 'block';
  } else {
    info.style.display = 'none';
  }
}

// Handle login form submission
const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop the default form submission

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: new FormData(loginForm)
      });

      if (response.ok) {
        // Successful login! Redirect the user
        window.location.href = '/dashboard';
        // OR, if using a frontend framework (like React Router):
        // history.push('/dashboard');
      } else {
        // Handle login failure
        const errorData = await response.json();
        alert(errorData.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  });
} else {
  console.warn('Login form with id "login-form" not found');
}