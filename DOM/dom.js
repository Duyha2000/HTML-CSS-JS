// innerHTML -> lấy ra nội dung của selector bao gồm cả HTML
let isRed = false;
// const myFunction = () => {
//   //   console.log("Xin chao");
//   isRed = !isRed;
//   title.style.color = isRed ? "black" : "red";
// };

const username = document.querySelector("#username");
const countrySelect = document.querySelector("#country");

const titleElement = document.querySelectorAll("h1");
const myFunction = () => {
  for (let i = 0; i < titleElement.length; i++)
    titleElement[i].style.color = "red";
};
const handleSubmit = (e) => {
  e.preventDefault(); // ngăn chặn 1 hành động submit form
  console.log(username.value, "username.value");
  console.log(countrySelect.value, "countrySelect.value");
  // Additional form handling logic can be added here
};
// setTimeout - setInterval

// setTimeout(() => {
//   console.log("Xin chao");
// }, 4000);

const intervalID = setInterval(() => {
  console.log("Xin chao");
}, 2000);
clearInterval(intervalID);
// Bài tập: nhập vào thời gian bạn mốn bắt đầu đếm ngược (số phút) và hiển thị bằng innerHTML (nếu giây < 10 sẽ hiển thị 00:09). Khi hết thời gian sẽ hiển thị dòng chữ "Bạn đã hết thời gian"
let input = parseInt(
  prompt("Hãy nhập vào thời gian bạn muốn bắt đầu đếm ngược (số phút): ")
);
let startTime = input * 60;

let countdownInterval = setInterval(() => {
  startTime--;

  const minutes = Math.floor(startTime / 60);
  const seconds = startTime % 60;

  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "timer"
  ).innerHTML = `${displayMinutes}:${displaySeconds} <br>`;

  if (startTime === 0) {
    clearInterval(countdownInterval);
    alert("Hết thời gian!");
  }
}, 1000);

//     Bài 1
let color = ["#FFFFFF", "#FF0000", "#00FF00", "#0000FF"];
const element = document.querySelector("button");
const handleChange = () => {
  document.body.style.backgroundColor =
    color[Math.floor(Math.random() * color.length)];
};
