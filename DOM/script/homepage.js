const handleSignUp = () => {
  window.location.href = "register.html";
};

const handleSignIn = () => {
  window.location.href = "login.html";
};

const access_token = localStorage.getItem("access_token");
console.log(access_token);
// Đăng nhập rồi và ẩn nút đăng ký - đăng nhập và hiển thị button sign out
if (access_token) {
  document.querySelector(".authen").style.display = "none";
  document.querySelector(".sign-out").style.display = "block";
}
const handleSignOut = () => {
  window.location.href = "login.html";
  localStorage.removeItem("access_token");
};
