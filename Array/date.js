// // Hiển thị ra ngày tháng năm (20 - 12 - 2023)
// const now = new Date(); // khởi tạo đối tượng Date

// // lấy ra năm
// // console.log(now.getFullYear());
// let year = now.getFullYear();
// // lấy ra tháng: 0 - 11
// // console.log(now.getMonth() + 1);
// let month = now.getMonth() + 1;
// // lấy ra ngày:
// // console.log(now.getDate());
// let hour = now.getHours();
// console.log(hour, "hour");
// // let day = now.getDate();
// // document.getElementById("title").innerHTML = `${day} - ${month} - ${year}`;
// // 05 - 08 - 1992
// let date = new Date(1994, 2, 5);
// let month2 = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
// let date2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

// console.log(month2, "aaa");
// console.log(date2, "bbb");
// Bài tập 2: Viết chương trình nhập vào năm sinh và in ra số tuổi - dễ
// Ví dụ: nhập năm sinh 1998 -> In ra: "Bạn năm nay 25 tuổi"
let age = parseInt(prompt("Nhap nam sinh cua ban"));
const now = new Date();
now.getFullYear(); // 2023
console.log(now.getFullYear() - age);
