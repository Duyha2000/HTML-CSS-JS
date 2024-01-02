function updateError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function validateUsername() {
  var username = document.getElementById("username").value;
  updateError(
    "errorUsername",
    username.length >= 5 ? "" : "Username must be at least 5 characters long."
  );
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  updateError(
    "errorEmail",
    emailRegex.test(email) ? "" : "Email is not valid."
  );
}

function validatePassword() {
  var password = document.getElementById("password").value;
  updateError(
    "errorPassword",
    password.length >= 8 ? "" : "Password must be at least 8 characters long."
  );
}

function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  updateError(
    "errorConfirmPassword",
    password === confirmPassword ? "" : "Passwords do not match."
  );
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    var isFormValid =
      document.getElementById("errorUsername").textContent === "" &&
      document.getElementById("errorEmail").textContent === "" &&
      document.getElementById("errorPassword").textContent === "" &&
      document.getElementById("errorConfirmPassword").textContent === "";

    if (isFormValid) {
      let account = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      // Chuyển đổi object thành chuỗi JSON và lưu vào localStorage
      localStorage.setItem("account", JSON.stringify(account));

      alert("Form is valid. Submitting...");
      // document.getElementById('registrationForm').submit();
    }
  });

// Thêm sự kiện oninput để xác thực trong thời gian thực
document.getElementById("username").oninput = validateUsername;
document.getElementById("email").oninput = validateEmail;
document.getElementById("password").oninput = validatePassword;
document.getElementById("confirmPassword").oninput = validateConfirmPassword;
