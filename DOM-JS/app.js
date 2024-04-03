// // // const title = document.querySelector(".title");

// // const handleSubmit = (event) => {
// //   event.preventDefault(); // ngăn chặn hành động mặc định
// //   console.log("AAA");
// // };
// // // mình sẽ dùng function bình thường:

// // //
// // // function handleInputChange() {
// // //   console.log("Xin chao!!!");
// // // }

// // // console.log(title2);

// // // getAttribute: lấy ra giá trị của thuộc tính trong thẻ HTML (vd: id, class, href, src, ...)
// // const result4 = title2.getAttribute("class");
// // console.log(result4);

// // const title2 = document.querySelector(".title3");

// // const result = title2.setAttribute("id", "title");

// // const handleClick = () => {
// //   title2.removeAttribute("id");
// // };

// // // setAttribute: thay đổi giá trị của thuộc tính trong thẻ HTML
// // console.log(result);

// // BT1:
// let products = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];
// const newProduct = {
//   id: 4,
//   name: "Coffee",
//   count: 20,
// };
// products.push(newProduct);
// console.log(products);
// // Xóa phần tử có id là 2:
// // Filter: sau khi xóa xong mảng không còn phần tử nào có id là 2 nữa
// products = products.filter((product) => product.id !== 2);
// console.log(products);
// // FindIndex + splice : tìm kiếm vị trí phần tử + xóa phần tử bằng splice
// const index = products.findIndex((product) => product.id === 3);
// // console.log(index);
// // products.splice(index, 1);
// // console.log(products);
// products[index].count = 0;
// //
// const indexButter = products.findIndex((product) => product.name === "Butter");
// console.log(indexButter);
// if (indexButter !== -1) console.log(products[indexButter]);
// else console.log("Kh tim thay phan tu nao thoa man");

// let headingElement = document.getElementById("heading");
// headingElement.innerHTML = `<div> This is heading </div>`;

// //
// // Lay class title
// // Lay 1 the dau tien co class la title
// const title = document.querySelector(".title");
// console.log("aaa", title);
// // Lấy tất cả các thẻ có class là title:
// const titles = document.querySelectorAll(".title");
// console.log("bbb", titles);
// //
// const titleCongTinh = document.getElementsByClassName("title");
// console.log("ccc", titleCongTinh);
// // const tooltip = document.getElementById("tooltip")
// // const tooltip = document.getElementsByTagName("h4")[0];
// // const tooltip = document.querySelector("#tooltip");
// // console.log(tooltip, "aaa");
// // function congtinh() {
// //   tooltip.style.display = "flex";
// // }
// // function congtinh2() {
// //   tooltip.style.display = "none";
// // }

// // oninput, onchange, onblur, onsubmit

// Nếu là id có tên giống tên biến thì không phải truy xuất phần tử DOM:
// console.log("back1", back1);

// back1.style.backgroundColor = "red";
// back1.addEventListener("click", () => {
//   console.log("AAA");
// });

// 1. oninput: sự kiện sẽ được gọi khi gõ ở ô input
// Lấy giá trị ô input -> truy xuất ô input -> để lấy giá trị thì .value
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorUsername = document.getElementById("errorUsername");

function handleInput() {
  // Tên đăng nhập không được để trống:
  // Tên đăng nhập phải lớn hơn 8 ký tự
  // console.log("AAA", username.value);
  if (username.value === "") {
    errorUsername.innerHTML = "Username can not empty";
    errorUsername.style.color = "red";
  } else if (username.value.length < 8) {
    errorUsername.innerHTML = "Username phải có ít nhất 8 ký tự";
    errorUsername.style.color = "red";
  } else {
    errorUsername.innerHTML = "";
  }
}

function handleInputPassword() {
  // Password không được để trống và phải lớn hơn 8 ký tự
  // ** Phải có ít nhất 1 ký tự viết hoa
  if (password.value === "") {
    errorPassword.innerHTML = "password can not empty";
    errorPassword.style.color = "red";
  } else if (password.value.length < 8) {
    errorPassword.innerHTML = "password phải có ít nhất 8 ký tự";
    errorPassword.style.color = "red";
  } else if (password.value == password.value.toLowerCase()) {
    errorPassword.innerHTML = "Password phải có ít nhất 1 ký tự viết hoa";
    errorPassword.style.color = "red";
  } else {
    errorPassword.innerHTML = "";
  }
}
// Users là 1 mảng để quản lý các người dùng tạo mới
const users = [];
function handleSubmit(event) {
  event.preventDefault(); // ngăn cản hành động mặc định của form là reset sau khi click button
  // Khi người dùng submit form sẽ tạo thêm mới 1 người dùng
  const newUser = {
    username: username.value,
    password: password.value,
  };
  users.push(newUser);
  console.log(newUser, "New User");
  console.log(users, "All user");
}
// Regex: Kiểm tra điều kiện phức tạp validate
// 2. onchange: sự kiện sẽ được gọi khi thay đổi input và click ra ngoài ô input đó
// 3. onBlur: sự kiện sẽ được gọi khi click vào ô input sau đó click ra ngoài
