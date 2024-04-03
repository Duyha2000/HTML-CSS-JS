// // // Muốn in 10 lần số 5 thì:
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // console.log(5);
// // let count = 0;
// // // Mỗi lần thỏa mãn điều kiện là 1 ước thì
// // count++;
// // // For: trong  - while: trong khi
// // // for(giá trị khởi tạo; điều kiện lặp; lệnh kết thúc){
// // //     // Thực thi code trong vòng lặp
// // // }
// // // .    1              ->   2       ->   4
// // // . Gía trị khởi tạo  -> điều kiện -> Thay đổi biến điếm
// // // for (let i = 0; i < 10; i++) {
// // //   // 3: Run code
// // //   console.log("hello"); //
// // // }

// // // for (let i = 1; i <= 5; i++) {
// // //   console.log(i);
// // // }
// // // // In ra các số từ 5 --> -5

// // // for (let i = -5; i <= 5; i++) {
// // //   console.log(i);
// // // }
// // // // In ra các số chia hết cho 2 từ -10 -> 10
// // // // let x = -10;
// // // // if(x%2===0) console.log(`${x} chia het cho 2`);
// // // // let y = -9
// // // // if (x % 2 === 0) console.log(`${y} chia het cho 2`);
// // // for (let i = -10; i <= 10; i++) {
// // //   if (i % 2 === 0) {
// // //     console.log(i);
// // //   }
// // // }
// // // // Hiển thị các số lẻ từ 1 - 10
// // // for (let i = 1; i <= 10; i++) {
// // //   if (i % 2 !== 0) console.log(`${i} is Odd number`);
// // // }
// // // Bài 2:
// // a = 5;
// // // Cách viết tắt a++;
// // a += 2;
// // // a = a + 2;
// // // a--;
// // // Tính tổng các số từ 1 đến 5:
// // // Tính tích các số từ 1 đến 5
// // let sum = 0;
// // let multiply = 1;
// // // for (let i = 1; i <= 5; i++) {
// // //   sum += i;
// // // }
// // // for (let i = 1; i <= 5; i++) {
// // //   multiply *= i;
// // // }
// // // console.log(sum);
// // // console.log(multiply);
// // // console.log(a);
// // let n = parseInt(prompt(`nhap so`));
// // let f1 = 1;
// // let f2 = 1;
// // console.log(f1);
// // console.log(f2);
// // let f3 = 0;
// // let n = parseInt(prompt("Nhập số lượng số fibonacci muốn hiển thị"));
// // for (let i = 3; i <= n; i++) {
// //   f3 = f1 + f2;
// //   console.log(f3);
// //   f1 = f2;
// //   f2 = f3;
// // }

// const n = parseInt(prompt("Nhập số n: "));
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) isPrime = false;
// }

// if (isPrime) console.log(`${n} Là số ngto`);
// else console.log(`${n} Ko phai ngto`);
// // Kiểm tra 1 người có trên 18t hay không, nếu trên thì in ra bạn đã đủ tuổi, còn k thì chưa đủ tuổi

// const age = parseInt(prompt("Nhập số tuổi: "));
// let isOlder18 = age > 18;
// if (isOlder18) console.log("Ban da du tuoi");
// else console.log("ban chua du tuoi");

// Bài tập: Hiển thị ra số dương đầu tiên chia hết cho 3,5 và 7 bằng vòng lặp for
// -> 105

// for (let i = 1;___________; i++) {
//   if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//     console.log(i);
//     // break;
//   }
// }

// for (let i = 1; i > 0; i++) {
//   if (i === 3) {
//     console.log(i);
//     break;
//   }
// }
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
for (let i = 1; ; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log(i);
    break;
  }
}

// let i = 1;
// let isChecked = true;
// while (isChecked) {
//   if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//     console.log(i); // 105
//     isChecked = false;
//   }
//   i++;
// }

// Nhập vào 1 số nguyên n, tính tổng các số chẵn từ 1 đến n, dùng vòng lặp while.
// let sum = 0;
// let i = 1;

// while (i <= n) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum); //
// Nhập vào 1 số nguyên n, In ra giai thừa của số đó, dùng vòng lặp while.
// Ví dụ: nhập n = 5 -> Giai thừa = 120 (5 * 4 * 3 * 2 * 1)
const n = parseInt(prompt("Nhập số n: "));
let i = 1;
let multiply = 1;
while (i <= n) {
  multiply *= i;
  i++;
}
console.log(multiply);

// let i = 1;
// while (i <= 5) {
//   // code here: thực hiện code trong vòng lặp đến bao giờ không thỏa mãn nữa thì thoát
//   console.log(i); // 1 2 3 4 5
//   // Bước nhảy:
//   i++;
// }
