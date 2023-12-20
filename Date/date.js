// Bài tập: Hiển thị ra ngày - tháng - năm hiện tại (20 - 12 - 2023)
// Khi register 1 tài khoản cần hiển thị đúng ngày tháng năm đki

// In ra ngày giờ hiện tại
const now = new Date(); // để sử dụng được Date trong JS cần khởi tạo
console.log(now);
// in ra năm: getFullYear()
console.log(now.getFullYear());
const year = now.getFullYear();

// in ra tháng: getMonth() // 0 - 11;
console.log(now.getMonth());
const month = now.getMonth() + 1;

// in ra ngày: getDate()
console.log(now.getDate());
const day = now.getDate();

const result = `${day} - ${month} - ${year} `;
document.getElementById("title").innerHTML = result;
// Tháng in ra theo định dạng 0 1 2 3 4 5 6 7 8 9
let date = new Date(1994, 8, 5);
console.log(date);
let month2;
if (date.getMonth() < 9) month2 = `0${date.getMonth() + 1}`;
else month2 = date.getMonth() + 1;

console.log("Month", month2);

// Bài tập 2: Viết chương trình nhập vào năm sinh và in ra số tuổi - dễ
// Ví dụ: nhập năm sinh 1998 -> In ra: "Bạn năm nay 26 tuổi"
