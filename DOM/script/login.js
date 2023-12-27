const username = document.querySelector("#username");
const password = document.querySelector("#password");
const msgUserName = document.querySelector(".msg-userName");
const msgPassword = document.querySelector(".msg-password");
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
console.log(uuidv4(), "aaa");
const errors = {
  message: "Lỗi",
  data: {
    username: "Tài khoản phải có ít nhất 6 ký tự",
    password: "Mật khẩu phải có ít nhất 8 ký tự",
  },
};
const hideErrorUsername = () => {
  if (username.value.length > 6) msgUserName.style.display = "none";
};
const hideErrorPassword = () => {
  if (password.value.length > 8) msgPassword.style.display = "none";
};
let isValidate = true;
const handleSubmit = (event) => {
  event.preventDefault();

  if (username.value.length <= 6) {
    msgUserName.innerHTML = `${errors.data.username ?? ""}`;
    msgUserName.style.display = "block";
    msgUserName.style.color = "red";
    isValidate = false;
  }

  if (password.value.length <= 8) {
    msgPassword.innerHTML = `${errors.data.password ?? ""}`;
    msgPassword.style.display = "block";
    msgPassword.style.color = "red";
    isValidate = false;
  }

  if (isValidate) {
    FuiToast.success("Đăng nhập thành công!!!");
    setTimeout(() => {
      // window.location.href: nhảy sang trang khác
      window.location.href = "homepage.html";
    }, 2000);
    // lưu thông tin access_token vào trong local
    localStorage.setItem("access_token", uuidv4());
    // Reset lại form sau khi submit thành công (thay vì phải cập nhật giá trị là "" bằng tay)
    event.target.reset();
  }
};
