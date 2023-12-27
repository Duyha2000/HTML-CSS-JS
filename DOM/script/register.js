const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const msgUserName = document.querySelector(".msg-userName");
const msgPassword = document.querySelector(".msg-password");
const msgConfirmPassword = document.querySelector(".msg-confirmPassword");

// onBlur: khi người dùng click ra ngoài ô input thì fuction sẽ được thực thi (ở đây sẽ check nếu nhập hơn 8 ký tự sẽ ẩn lỗi đi)

const errors = {
  message: "Lỗi",
  data: {
    username: "Tài khoản phải có ít nhất 8 ký tự",
    password: "Mật khẩu phải có ít nhất 8 ký tự",
    confirmPassword: "Mật khẩu không giống nhau!!!",
  },
};

const hideErrorUsername = () => {
  if (username.value.length > 8) msgUserName.style.display = "none";
};
const hideErrorPassword = () => {
  if (password.value.length > 8) msgPassword.style.display = "none";
};
const hideErrorConfirmPassword = () => {
  if (confirmPassword.value.length > 8)
    msgConfirmPassword.style.display = "none";
};
let isFlag = true;
const handleSubmit = (event) => {
  event.preventDefault(); // ngăn chặn 1 hành động submit form
  // Tài khoản phải có ít nhất 3 ký tự

  if (username.value.length < 8) {
    msgUserName.innerHTML = `${errors.data.username ?? ""}`;
    msgUserName.style.display = "block";
    msgUserName.style.color = "red";
    isFlag = false;
  }

  if (password.value.length < 8) {
    msgPassword.innerHTML = `${errors.data.password ?? ""}`;
    msgPassword.style.display = "block";
    msgPassword.style.color = "red";
    isFlag = false;
  }
  if (confirmPassword.value.length < 8) {
    msgConfirmPassword.innerHTML = `${errors.data.confirmPassword ?? ""}`;
    msgConfirmPassword.style.display = "block";
    msgConfirmPassword.style.color = "red";
    isFlag = false;
  }
  if (password.value !== confirmPassword.value) {
    msgConfirmPassword.innerHTML = `${errors.data.confirmPassword ?? ""}`;
    msgConfirmPassword.style.display = "block";
    msgConfirmPassword.style.color = "red";
    isFlag = false;
  }
  // lấy giá trị của form để hiển thị ra giao diện
  if (isFlag) {
    // setTimeout để sau 2s sẽ nhảy sang trang login (trong khoảng thời gian này sẽ hiển thị ra thông báo Đăng ký thành công)
    FuiToast.success("Đăng ký thành công!!!");
    setTimeout(() => {
      // window.location.href: nhảy sang trang khác
      window.location.href = "login.html";
    }, 2000);
    // lưu thông tin form khi submit vào trong local
    localStorage.setItem(
      "account",
      JSON.stringify({
        username: username.value,
        password: password.value,
      })
    );

    // Reset lại form sau khi submit thành công (thay vì phải cập nhật giá trị là "" bằng tay)
    event.target.reset();
  }
};
