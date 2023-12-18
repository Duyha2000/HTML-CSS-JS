// In ra chữ hello 10 lần nếu không dùng vòng lặp ??
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// Khang
// .    1 ->   2    ->   4
// . Gía trị khởi tạo  -> điều kiện -> Thay đổi biến điếm
// for (let i = 0; i < 10; i++) {
//   // 3: Run code
//   console.log("hello"); //
// }
// Code sẽ không chạy khi biến i vượt quá điều kiện

// In ra các số từ 1 đến 5. In ra: 1 2 3 4 5
// for (let i = 1; i <= 5; i++) console.log(`${i} `);
// Tính tổng các số từ 1 -> 10
// console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
// let sum = 0;
// sum += 1; // 1
// sum += 2; // 3
// sum += 3; // 6
// sum += 4; // 10
// sum += 5; // 15
// In ra a?
// for (let i = 1; i <= 10; i++) sum += i;
// console.log(sum);
// Bạn hãy viết chương trình nhập vào từ bàn phím số nguyên n và thực hiện hiển thị các số từ n về -5.

// Ví dụ nếu nhập n = 5 thì chương trình sẽ hiển thị ra màn hình:

// 5 4 3 2 1 0 -1 -2 -3 -4 -5
// let n = parseInt(prompt("Nhập số nguyên n:"));
// for (let i = n; i >= -5; i--) {
//   console.log(i);
// }
// let a = parseInt(prompt("Nhập số nguyên a:"));
// let b = parseInt(prompt("Nhập số nguyên b:"));
// let sum = 0;
// for (let i = a; i <= b; i++) sum += i;
// console.log(sum);

// In ra các số chẵn từ 1 -> 10
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// let a = parseInt(prompt("Nhập số nguyên a:"));
// let b = parseInt(prompt("Nhập số nguyên b:"));
// for (let i = a; i <= b; i++) {
//   if (i % 3 === 0) console.log(i);
// }

// let n = parseInt(prompt("Nhập số nguyên n:"));
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) console.log(i);
// }

// In ra số chẵn đầu tiên trong đoạn từ 1 -> 10
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//     break; // dừng lại chương trình
//   }
// }
// while: khi
// lặp cho đến khi
// while(condition){
//     // code
//     // thay đổi biến
// }

// In ra các số từ 1 đến 5
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++; // 6
// }
// let n = parseInt(prompt("Nhap so nguyen bat ky"));
// while (n <= 100) {
//   if (n % 2 === 0) console.log(n);
//   n++;
// }
// Input : a = 2 ; b = 3
// ^ 5 -> 2 * 2 * 2 * 2 * 2 ( 1 -> 5)
// let a = parseInt(prompt("Nhap so nguyen bat ky"));
// let b = parseInt(prompt("Nhap so nguyen bat ky"));
// let i = 1;
// let result = 1;
// result *= 2; // 1
// result *= 2; // 4
// result *= 2; // 8
// Tính 5! -> 5 * 4 * 3 * 2 *1
// let result = 1;
// for (let i = 5; i >= 1; i--) result *= i;
// console.log(result);
// Bài toán tính tổng sum = 0 -> sum +=i
// Bài toán phép nhân: result = 1 -> result *= i
// while (i <= b) {
//   result *= a;
//   i++;
// }
// console.log(result);
// Cho 1 số 1234 -> Tính tổng các chữ số của nó
// Output: 1 + 2 + 3 + 4 = 10
// let sum = 0;
// 4 3 2 1
// Phép chia: / %
// B1:
// 1234 % 10  = 4 -> sum += 1234 % 10 (4)
// 1234 / 10  = 123
// B2:
// 123  % 10   = 3 -> sum += 123 % 10 (4 +3)
// 123  / 10   = 12
// B3:
// 12  % 10   = 2 -> sum += 123 % 10 (4 +3 +2 )
// 12  / 10   = 1
// B4:
// 1 % 10 = 1 -> sum += 123 % 10 (4 +3 +2 +1)
// 1 / 10 = 0
// B5:
// 0 % 10 = 0
// // 0 / 10 = 0
// console.log(1234 / 10);
// let number = 1234;
// while (number > 0) {
//   sum += number % 10;
//   number = Math.floor(number / 10);
// }
// console.log(sum); // 10
// let product = 2;
// while (product <= 10) {
//   product *= 3; // product = 6;
//   // product = 18
// }
// console.log(product);
// Cach 1:
let n = parseInt(prompt("Nhap so k")); // 3

let count = 0; // bài đếm có biến count = 0
let input;
if (n < 1 || n > 10) console.log("So can nhap phai nam trong khoang tu 1->10");
while (input !== n) {
  input = parseInt(prompt("Nhap 1 so")); //
  count++;
}
console.log(`You got it after ${count} tries!`);

// Cach 2:
// let n = parseInt(prompt("Nhap so cần đoán"));

// else {
//   let tries = 0;
//   let guess;
//   while (true) {
//     guess = parseInt(prompt("Nhap 1 so se doan")); //
//     tries++;
//     if (guess === n) {
//       console.log(console.log(`Ban da nhap sau ${tries} lan`));
//       break;
//     } else {
//       console.log("Hay thu so khac");
//     }
//   }
// }

// So nguyen to:số chia hết cho 1 và chính nó
// Bắt đầu từ số 2
// 5: 1 -> 5
// 6: 6 -> 2,3
// 7: 2 -> 7
let result = "số nguyên tố";
let prime = parseInt(prompt("Nhap vao 1 so"));
for (let i = 2; i < prime; i++) {
  if (prime % i === 0) {
    result = "Kh phai so nguyen to";
    break;
  }
}

console.log(result);
