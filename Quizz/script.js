// // //    i = 4
// // // B3:
// // for (i = 0; i < 5; i++) {
// //   if (i < 3) i++; // 3
// //   else i++; // 5
// // }
// // console.log(i);
// // // let a = 10;
// // // var a = 20;
// // // const a = 30;

// // let a = [1, 2, 3, 4];
// // a.push(10); // Length: độ dài mới của mảng
// // console.log(a.length);

// // // stop();
// // // Set : lấy các phần tử ko trung lặp trong mảng
// // // Map: đếm tần số xuất hiện các phần tử trong mảng

// // // Đều là sử dụng vòng lặp for
// // // Map: tạo ra 1 mảng mới  -> duyệt các phần tử trong mảng
// // // forEach: thay đổi trực tiếp các phần tử trong mảng (ko nên sử dụng)
// // // filter: lọc các phần tử thỏa mãn điều kiện
// // // reduce: dùng để tính toán (tính tổng các sản phẩm trong giỏ hàng)
// // // const rikkei = document.getElementsByClassName("rikkei");
// // // rikkei[0].classList.add("acedemy");
// // // const rikkei = document.querySelector(".rikkei");
// // // rikkei.style.display = "none";
// // let arr = [1, 2, 3, 4];
// // // arr.length = 0;
// // // console.log(arr);

// // const sum = () => {
// //   console.log("aaa");
// // };
// // let x = 4;
// // console.log(typeof x);
// // // Kiểu dữ liệu nguyên thủy (tham trị): number - string - boolean - null - undefined
// // // Kiểu dữ liệu tham chiếu: object

// // // falsy là gì? truthy là gì
// // // có những falsy: null undefined NaN 0 false ""
// // console.log(Boolean(""));
// // // ||: trả về giá trị truthy đầu tiên, nếu k trả về thằng cuối cùng
// // let c = null || NaN || 0 || 0;
// // console.log(c);
// // // &&: trả về giá trị falsy đầu tiên, nếu k có trả về thằng cuối cùng
// // let d = null && 10 && 15 && 20;
// // console.log(d, "ddd");
// // // ??: trả về giá trị sau null - undefinde đầu tiên
// // let e = 0 ?? "Hello";
// // console.log(e);

// // sayHi();
// // function sayHi() {
// //   console.log("AAA");
// // }

// // // const a = 4;
// // const fc = () => {
// //   console.log("AAA");
// // };

// // // Callback function:
// // function notify() {
// //   console.log("Hello world");
// // }

// // function taskOne(callback) {
// //   callback();
// // }

// // // Truyền function notify dưới dạng biến vào taskOne
// // taskOne(notify);
// // // Có các cách nào để xử lý bất đồng bộ:
// // // Callback function
// // // Promise
// // // async - await
// // const obj = {
// //   name: "Duy",
// //   address: "HCM",
// // };
// // // Truy xuất name
// // // let name = obj.name;
// // // let address = obj.address;
// // // Destructuring object
// // const { name, address } = obj;
// // console.log(name + address);
// // // Trong các ngôn ngữ lập trình
// // // true: trả về 1
// // // false: trả về 0
// // // + ép kiểu dữ liệu
// // let b = !"ICT Hà Nội";
// // console.log(b);
// // let z = +true;
// // console.log(z);

// // console.log(a === b);
// // let result = 1 < 2;
// // console.log(result);
// // console.log(result < 3);

// // let result2 = 3 > 2;
// // console.log(result2);
// // console.log(result2 == 1);
// const x = 7 % 2; // 0 - false

// const y = x ? "Two" : "One";

// // console.log(y);
// // let modal = document.querySelector("#result");
// // setTimeout(() => {
// //   modal.classList.remove("hidden");
// // }, 10000);
// // console.log("Results shown");

// function getData() {
//   console.log(1);
//   console.log(2);
// }
// // console.log(getData());
// getData();
// // try{

// // }catch{

// // }

// var start = 1;
// // function setEnd() {
// //   var end = 10;
// // }
// if (true) {
//   var end = 10;
// }
// // setEnd();
// console.log(end);

// function printA() {
//   //  var answer : undefinded

//   console.log(answer);
//   var answer = 1;
// }
// printA();
// // printA();
// // function sayHi() {
// //   // var name
// //   console.log(name);

// //   console.log(age);

// //   var name = "Lydia";
// //   let age = 21; //
// // }

// // sayHi();
// const foo = {
//   bar() {
//     console.log("Hello, world!");
//   },
//   name: "Albert",
//   age: 26,
// };
// // isPrime -> có phải nguyên tố hay không
// // some: một / một vài
// // every: mọi thứ
// function isBiggerThan10(element) {
//   return element > 10;
// }

// console.log([2, 5, 8, 1, 4].some(isBiggerThan10));

// console.log([12, 5, 8, 1, 4].every(isBiggerThan10));

// const ages = [3, 10, 20, 18];

// function checkAge(age) {
//   return age > 20;
// }

// let age = ages.find(checkAge);
// console.log(age);

// if (5 === "5") {
//   var x = 5;
//   const y = 6; // ko hoisting
//   let z = 7; // ko hoisting
// }
// console.log(x + y + z);
const data = [1, 2, 3, 4, 5, 10];

// 4 - 5 - 10
// 8 - 10 - 20
// const result = data
//   .filter((item) => {
//     return item > 3;
//   })
//   .map((item) => {
//     return item * 2;
//   });

// console.log(result);
// console.log(data);

// Trang tính toán các sản phẩm trong giỏ hàng
const listProducts = [
  { name: "iphone12", price: 2000 },
  { name: "iphone12", price: 20020 },
];

const totalPrice = listProducts
  .map(({ price }) => price)
  .reduce((accumulator, value) => accumulator + value, 0);

console.log(totalPrice);
