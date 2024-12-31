// Simulate the correct credentials (for demo purposes)
const correctEmail = "user@example.com";
const correctPassword = "password123";

document.getElementById("loginForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the credentials match
  if (email !== correctEmail || password !== correctPassword) {
    // Show the error message if credentials are incorrect
    document.getElementById("errorMessage").style.display = "block";
  } else {
    // Store user data (email, timestamp, and IP address simulation) in localStorage
    const userData = {
      email: email,
      timestamp: new Date().toLocaleString(),
      ip: "192.168.1.1" // This is just a simulation. IP is typically obtained on the server-side.
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to the display page (Page 2)
    window.location.href = "display.html";
  }
};