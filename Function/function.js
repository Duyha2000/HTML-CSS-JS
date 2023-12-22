import isPrime from "./primeNumber.js";
import { sumTwoNumber, subtracTwoNumber } from "./sumTwoNumber.js";
console.log(sumTwoNumber(2, 3)); // 5
// SỰ khấc nhau giữa export và export default như thế nào
console.log(sumTwoNumber(4, 6)); // 10
console.log(subtracTwoNumber(6, 4)); // 2
// 1 công việc lớn Xây 1 căn nhà:
// 1 phần nhỏ (chức năng: function): Huyền làm phần nóc
// 1 phần nhỏ: Trang làm phần thân
// 1 phần nhỏ: Hùng làm phần trộn xi măng

// Tính tổng các số từ 1 - n
// let n = parseInt(prompt("Nhap n"));
// let sum = 0;

// document.getElementById("sum").innerHTML = `${sum}`;

// let sum = 0;
// function sumNumber(n) {
//   for (let i = 0; i < n; i++) sum += i;
//   return sum;
// }
// console.log(sumNumber(3));
// console.log(sumNumber(5));
// Viết 1 lần và sử dụng nhiều nơi
// 2 loại hàm
// Declaration function: hàm khai báo
// function functionName(arg...){
//     // xử lý logic
// }
// In ra các số từ 1 - 5

// function show() {
//   for (let i = 0; i <= 5; i++) console.log(i);
//   var y = 5; // Scope
// }
// show();
// if (true) {
//   // var y = 5;
// }
// let,const block scope: chỉ truy cập được bên trong cặp {}
// console.log(y, "y");
// Có cơ chế hoisting

// var z = 5;
// z = 10;
// console.log(z); //

// Var - let - const (phân biệt cho anh 3 từ khóa var , let , const)
// const: hằng số - PI - không thể thay đổi
// var: có thể dùng nhiều lần từ khóa var để ghi đè giá trị
// let: khai báo biến chỉ được khai báo từ khóa 1 lần (có thể thay đổi giá trị)

// Hoisting
// var: bị hoisting khi khai báo 1 biến sẽ được đẩy lên đầu phạm vi chương trình
// console.log(m);
// var y;  undefined (không xác định)
// let, const: không bị hoisting
// let m;

// Phạm vi truy cập của biến
// var: phạm vi truy cập là global ngoại trừ function
// var y = 5;
// console.log(y);
// for (let i = 0; i < 5; i++) {
//   console.log(y);
//   var z = 5;
// }
// console.log(z);

// function show() {
//   var n = 5;
// }
// console.log(n);
// let,const

// function display() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// console.log(l);
// khi khai báo biến let, const bên trong {} -> thì sẽ không truy cập bên ngoài được

// Không hoisting
// Arrow: mũi tên
// let display = () => {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// };
// display();

// Tính tích các số từ 1 đến n
// let n = parseInt(prompt("Nhap n")); // n = 4
// let product = 1;
// let productNumber = (n) => {
//   for (let i = 1; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// };

// console.log(productNumber(5));
// console.log(productNumber(3));

// Cho 1 mảng các số nguyên n phần tử -> In ra các số chia hết cho cả 3 và 5

// B1: Khởi tạo và khai báo biến
// let arr = [];
// let n = parseInt(prompt("Nhap n phần tử trong mảng"));
// for (let i = 0; i < n; i++) {
//   let inputNumber = parseInt(prompt(`Nhap phần tử thứ ${i + 1}`));
//   arr.push(inputNumber);
// }

// // Bước 2: viết hàm
// let divideNumber = (n) => {
//   for (let i = 0; i < n; i++) {
//     if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//       document.getElementById("divideNumber").innerHTML += `${arr[i]} `;
//       console.log(arr[i]);
//     }
//   }
// };
// // Bước 3: gọi hàm
// divideNumber(n);

// Nhập 1 mảng số nguyên n phần tử và in ra các số lẻ > 0
// let number1 = parseInt(prompt("Nhap n phần tử trong mảng"));
// let arr = [];
// for (let i = 0; i < number1; i++) {
//   let inputNumber = parseInt(prompt(`Nhap phần tử thứ ${i + 1}`));
//   arr.push(inputNumber);
// }
// Bước 2: viết hàm
// let oddPositive = (number1) => {
//   for (let i = 0; i < number1; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] > 0) {
//       document.getElementById("odd-positive").innerHTML += `${arr[i]} `;
//     }
//   }
// };
// Bước 3: Gọi hàm
// oddPositive(number1);
// Nhập 1 số và tính giai thừa của số đấy (5! = 5 *4 *3 *2 *1)
// Bước 1: Khởi tạo và khai báo biến
// let number = parseInt(prompt("Nhap 1 số nguyên n"));
// // Bước 2: viết hàm
// let factorial = (number) => {
//   let result = 1;
//   for (let i = 1; i <= number; i++) result *= i;
//   return result;
// };
// BƯớc 3: gọi hàm
// document.getElementById("factorial").innerHTML = `${factorial(number)}`;
// Nhập 2 số a, b -> tính tổng 2 số a ,b
// Bước 1: khởi tạo biến
// let a = parseInt(prompt("Nhap 1 số nguyên a"));
// let b = parseInt(prompt("Nhap 1 số nguyên b"));
// // Bước 2: viết hàm (đây là hàm tính toán nên sẽ cần trả về 1 giá trị gì đấy)
// // let sumTwoNumber = (a, b) => {
// //   return a + b;
// // };
// // Không cần return nếu chỉ xử lý logic trên 1 dòng
// let sumTwoNumber = (a, b) => a + b;
// // Bước 3: gọi hàm (khai báo biến nào thì khi gọi hàm sẽ vứt biến đó)
// document.getElementById("factorial").innerHTML = `${sumTwoNumber(a, b)}`;

// In ra số nhỏ nhất chia hết cho 3,5,7 (số dương)
// 105 (sử dụng vòng lặp while)
// let i = 7;

// while (i % 3 !== 0 || i % 5 !== 0) {
//   i += 7;
// }
// let number = 1;
// const isDivideNumber = (number) => {
//   return number % 3 === 0 && number % 5 === 0 && number % 7 === 0;
// };
// while (number > 0) {
//   if (isDivideNumber(number)) {
//     console.log(number);
//     break;
//   }
//   number++;
// }
// Viết hàm kiểm tra 1 số có phải nguyên tố hay không?
// Nhập 1 số và kiểm tra số đó có phải nguyên tố hay không??

// let result = "là số nguyên tố";

// // B1: Khởi tạo biến
// let n = parseInt(prompt("Nhập số n:"));
// // Bước 2: Viết hàm kiểm tra(đúng / sai nên trả về true /false)
// const isPrime = (n) => {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };
// // Bước 3: Gọi hàm boolean bằng if - else
// if (isPrime(n)) console.log(`${n} Là số nguyên tố`);
// else console.log(`${n} ko Là số nguyên tố`);
// Bài tập 1: Tính lập phương 1 số
// let a = parseInt(prompt("Nhập 1 số:"));
// let b = parseInt(prompt("Nhập 1 số:"));

// return 1 giá trị gì đấy
// let findCube = (a, b) => a * b;
// document.getElementById("title").innerHTML = `${findCube(a, b)}`;

// let sumTwoNumber = (a, b) => a + b;
// console.log(sumTwoNumber(a,b))
// In ra 20 số nguyên tố:
// Export: xuất ra - import: nhập vào

let count = 0;
let prime = 2;
let sum = 0;
while (count < 20) {
  if (isPrime(prime)) {
    count++;
    sum += prime;
    console.log(prime);
  }
  prime++;
}
console.log(sum);

// Nhập 1 số và tính tổng các chữ số giai thừa của số đấy
// 5 - > 120 -> 1 + 2 + 0
let number = parseInt(prompt("input number"));

let factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) result *= i;
  return result;
};

let sumNumber = (number) => {
  let sum = 0;
  // 120 => 1 + 2 + 0
  while (number > 0) {
    sum += number % 10;
    number /= Math.floor(number);
  }
  return sum;
};

let a = factorial(5); // 120
document.write(sumNumber(a)); // 1 + 2 + 0 = 3
