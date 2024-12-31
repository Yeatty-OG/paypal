// Correct credentials
const correctEmail = "yeatty";
const correctPassword = "yeatty2510";

// Show login page initially
function showLoginPage() {
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("infoPage").style.display = "none";
}

// Show info page
function showInfoPage() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("infoPage").style.display = "block";
}

// Handle login form submission
document.getElementById("loginForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email and password
  if (email === correctEmail && password === correctPassword) {
    // Store user data in sessionStorage
    const userData = {
      email: email,
      timestamp: new Date().toLocaleString(),
      ip: "192.168.1.1" // This is just a simulation. IP is typically obtained on the server-side.
    };

    sessionStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to the info page
    showInfoPage();
  } else {
    // Show error message
    document.getElementById("errorMessage").style.display = "block";
  }
};

// Retrieve user data from sessionStorage and display it on the info page
const userData = JSON.parse(sessionStorage.getItem("userData"));

if (userData) {
  document.getElementById("emailDisplay").textContent = userData.email;
  document.getElementById("passwordDisplay").textContent = "********"; // Masking password
  document.getElementById("timestampDisplay").textContent = userData.timestamp;
  document.getElementById("ipDisplay").textContent = userData.ip;
} else {
  showLoginPage();
}
