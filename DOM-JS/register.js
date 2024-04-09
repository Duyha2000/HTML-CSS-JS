let inpName = document.getElementById("name");
let errorName = document.getElementById("error-name");
let checkName = false;
function handleNameChange() {
  if (inpName.value === "") {
    errorName.innerHTML = "Name không được để trống";
    errorName.style.display = "flex";
    checkName = false;
  } else if (inpName.value.length < 6) {
    errorName.innerHTML = "Name phải có trên 6 ký tự ";
    errorName.style.display = "flex";
    checkName = false;
  } else if (inpName.value === inpName.value.toLowerCase()) {
    errorName.innerHTML = "Name phải có ít nhất một ký tự viết hoa ";
    errorName.style.display = "flex";
    checkName = false;
  } else {
    errorName.style.display = "none";
    checkName = true;
  }
}
//điều kiện email
let inpEmail = document.getElementById("email");
let errorEmail = document.getElementById("error-email");
let checkemail = false;
function handleEmailChange() {
  if (inpEmail.value === "") {
    errorEmail.innerHTML = "Email không được để trống";
    errorEmail.style.display = "flex";
    checkemail = false;
  } else if (inpEmail.value.length < 8) {
    errorEmail.innerHTML = "Email phải có trên 8 ký tự";
    errorEmail.style.display = "flex";
    checkemail = false;
  } else if (inpEmail.value === inpEmail.value.toLowerCase()) {
    errorEmail.innerHTML = "Email phải có 1 ký tự viết hoa";
    errorEmail.style.display = "flex";
    checkemail = false;
  } else if (inpEmail.value === inpEmail.value.toUpperCase()) {
    errorEmail.innerHTML = "Email phải có 1 ký tự viết thường";
    errorEmail.style.display = "flex";
    checkemail = false;
  } else {
    errorEmail.style.display = "none";
    checkemail = true;
  }
}
//điều kiện password
function isAllCharPresent(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) return true;
  }
  return false;
}
let inpPassword = document.getElementById("password");
let errorPassword = document.getElementById("error-password");
let checkPassword = false;
function handlePasswordChange() {
  if (inpPassword.value === "") {
    errorPassword.innerHTML = "Password không được để trống";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else if (inpPassword.value.length < 8) {
    errorPassword.innerHTML = "Password phải có trên 8 ký tự";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else if (inpPassword.value === inpPassword.value.toLowerCase()) {
    errorPassword.innerHTML = "Password phải có 1 ký tự viết hoa";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else if (inpPassword.value === inpPassword.value.toUpperCase()) {
    errorPassword.innerHTML = "Password phải có 1 ký tự viết thường";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else if (!isAllCharPresent(inpPassword.value)) {
    errorPassword.innerHTML = "Password phải có 1 số";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else {
    errorPassword.style.display = "none";
    checkPassword = true;
  }
}
//Điều kiện confirm password
let inpConfirmPassword = document.getElementById("confirm-password");
let errorConfirmPassword = document.getElementById("error-confirm-password");
let checkConfirmPassword = false;
function handleCreatePasswordChange() {
  if (inpConfirmPassword.value === "") {
    errorConfirmPassword.innerHTML = "Confirmpassword không được để trống";
    errorConfirmPassword.style.display = "flex";
    checkConfirmPassword = false;
  } else if (inpConfirmPassword.value.length < 8) {
    errorConfirmPassword.innerHTML = "Confirmpassword phải có trên 8 ký tự";
    errorConfirmPassword.style.display = "flex";
    checkConfirmPassword = false;
  } else if (
    inpConfirmPassword.value === inpConfirmPassword.value.toLowerCase()
  ) {
    errorConfirmPassword.innerHTML = "Confirmpassword phải có 1 ký tự viết hoa";
    errorConfirmPassword.style.display = "flex";
    checkConfirmPassword = false;
  } else if (
    inpConfirmPassword.value === inpConfirmPassword.value.toUpperCase()
  ) {
    errorConfirmPassword.innerHTML =
      "Confirmpassword phải có 1 ký tự viết thường";
    errorConfirmPassword.style.display = "flex";
    checkConfirmPassword = false;
  } else if (!isAllCharPresent(inpConfirmPassword.value)) {
    errorConfirmPassword.innerHTML = "Confirmpassword phải có 1 số";
    errorConfirmPassword.style.display = "flex";
    checkConfirmPassword = false;
  } else if (inpPassword.value !== inpConfirmPassword.value) {
    errorConfirmPassword.innerHTML = "Confirmpassword phải giống với password";
    errorConfirmPassword.style.display = "flex";
    checkConfirmPassword = false;
  } else {
    errorConfirmPassword.style.display = "none";
    checkConfirmPassword = true;
  }
}
//Điều kiện checkbox
let checkBox = document.getElementById("checkbox");
let errorCheckBox = document.getElementById("error-checkbox");
let checkBox2 = false;
function handleCheckboxChange() {
  if (checkBox.checked) {
    errorCheckBox.style.display = "none";
    checkBox2 = true;
  } else {
    errorCheckBox.innerHTML = "Bạn phải tick vào chekbox.";
    errorCheckBox.style.display = "flex";
    checkBox2 = false;
  }
}
let congtinh = document.getElementById("congtinh");

const users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users, "aaa");

function display() {
  let html = ``;
  for (let i in users) {
    html += `<div> ${users[i].name} - ${users[i].email} </div>`;
  }
  congtinh.innerHTML = html;
}
display();

//Lấy giá trị của form khi nhấn submit
function handleSubmit(event) {
  event.preventDefault();
  if (
    checkName &&
    checkemail &&
    checkPassword &&
    checkConfirmPassword &&
    checkBox2
  ) {
    let newUser = {
      id: Math.floor(Math.random() * 1000),
      name: inpName.value,
      email: inpEmail.value,
      password: inpPassword.value,
    };
    let index = users.findIndex((user) => user.email === inpEmail.value);
    if (index === -1) {
      // event.target.reset(); // reset form sau khi nhap het thong tin
      // window.location.href = "login.html";
      users.push(newUser);
      console.log(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      FuiToast.success("Dang ky tai khoan thanh cong!");
      //Chuyen sang trang khac sau khi dang ky tai khoan thanh cong
      event.target.reset();
      window.location.href = "login.html";
      display();
    } else {
      FuiToast.error(
        "Email da ton tai trong he thong, ban khong the dang ky nua!!!"
      );
    }
    // let isChecked = false;
    // for (let i in users) {
    //   if (users[i].email === inpEmail.value) {
    //     isChecked = true;
    //   }
    // }
    // if (isChecked) {
    //   alert("Email da ton tai trong he thong!");
    // } else {
    //   // event.target.reset(); // reset form sau khi nhap het thong tin
    //   // window.location.href = "login.html";
    //   users.push(newUser);
    //   console.log(newUser);
    // }
  } else {
    FuiToast.error("Vui lòng nhập đầy đủ hết thông tin!!!!");
  }
}

// localStorage: có những hàm:
// setItem: để lưu dữ liệu vào local
// localStorage.setItem(key,value)
// key: string, value: string
// Lưu dữ liệu value là 1 mảng:
// localStorage.setItem(key, JSON.stringify(value));
// getItem: dùng để lấy ra

// localStorage.getItem(key):
// JSON.parse(localStorage.getItem(key))
