// Sau 2s sẽ chạy 1 lần function

let timeout = 60;
const myInterval = setInterval(() => {
  timeout--;
  console.log("Xin chao");
}, 1000);
// 00: 00
// 60 -> 0
// Để ngăn không cho chạy liên tục có thể sử dụng clearInterval
clearInterval(myInterval);
// const myTimeOut = setTimeout(() => {
//   console.log("Xin chao");
// }, 2000);
// setInterval sẽ sử dụng để làm đồng hồ đếm giờ

// Nhập vào số phút và hiển thị đồng hồ đếm ngược
// let input = parseInt(prompt("Nhập vào thời gian bạn muốn đếm ngược:"));
// let startTime = input * 60; // 120

// const countdownInterval = setInterval(() => {
//   startTime--;
//   // 1.23 -> 1 ; 1.97 -> 1
//   const minutes = Math.floor(startTime / 60);
//   const seconds = startTime % 60;
//   let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
//   let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

//   document.getElementById(
//     "title"
//   ).innerHTML = `${displayMinutes} : ${displaySeconds}`;
//   if (startTime === 0) {
//     clearInterval(countdownInterval);
//     document.getElementById("title").innerHTML = "Bạn đã hết thời gian";
//   }
// }, 1000);
// const minute = document.getElementById("minute");
// const second = document.getElementById("second");

// let date = new Date("January 10, 1000 00:00:00");
// date.setMinutes(parseInt(prompt("Enter the countdown time in minutes")));

// const countDown = setInterval(() => {
//   date.setSeconds(date.getSeconds() - 1);

//   minute.innerText = date.getMinutes();
//   second.innerText = date.getSeconds();

//   if (date.getMinutes() === 0 && date.getSeconds() === 0)
//     clearInterval(countDown);
// }, 1000);

// const title = document.querySelector("h2"); // null
// title.style.backgroundColor = "red";
// onClick: click chuột
// onSubmit: khi mình gửi form

// getElementbyId, getElementsbyClassname
const title = document.querySelectorAll("h1"); // []
let isRed = false;
// Khi click lại 1 lần nữa chữ sẽ trở thành màu đen
const myFunction = () => {
  isRed = !isRed;
  for (let i = 0; i < title.length; i++) {
    title[i].style.color = isRed ? "black" : "red";
  }
};

// onClick

console.log(title);

//                 0          1          2           3
const colors = ["#FFFFFF", "#FF0000", "#00FF00", "#0000FF"];
// const clickButton = document.querySelector(".click");
// clickButton.addEventListener("click", changeBackgroundColor);

// let changeBackgroundColor = () => {
//   console.log(Math.random()); // 0 - x - 1
//   let changeColors = colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = changeColors;
// };
// const display = document.querySelector(".display");
// console.log(display, "display");
// Viết 1 hàm hiển thị các số từ 1 - > 5
// const show = () => {
// Hàm hiển thị có cần return không?
//   for (let i = 1; i <= 5; i++) display.innerHTML += ` ${i} `;
// };
// show();
