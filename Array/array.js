// Array - Mảng:
// const a = 3
// const b = 3;
// const c = 3;
// const d = 3;
// const e = 3;
// const arr = [3, 5, 4, 3, 3];
// let books = ["Văn học", "Du lịch", "Trinh Thám", "Thần thoại", "Dân Gian"];
//              0 .         1           2           3             4
// Truy cập 1 chỉ số trong mảng:
// Chỉ số mảng bắt đầu từ 0 -> []
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[5]); ??
// length: chiều dài
// console.log(books.length);
//
// console.log(books[books.length - 1]);
// Đẩy 1 phần tử vào cuối mảng: push  -> đẩy
// pull : kéo về
// books.push("Cổ tích");
// console.log(books);

// Nhập 10 số nguyên
// let great = [];
// let sum = 0;
// B1: Input và đẩy các số vào mảng
// for (let i = 0; i < 10; i++) {
//   let input = parseInt(prompt(`Nhap 1 so nguyen thu ${i + 1}`));
//   great.push(input);
// }
// B2: Tính tổng: great = [2,3,1,4,5,6,7,8,9,10];
// great[0] + great[1] + great[2] + ... + great[9]
// for (let i = 0; i < 10; i++) sum += great[i];
// console.log(sum);
// let arr = [];
// let n = parseInt(prompt("Nhập số phần tử của mảng:"));

// for (let i = 0; i < n; i++) {
//   let input = parseInt(prompt(`Nhap 1 so nguyen thu ${i + 1}`));
//   arr.push(input);
// }
// // arr = [15, 7, 6, 8, 9]
// // .                   ->
// // let MAX_VALUE = arr[0];
// let MIN_VALUE = arr[0];
// // Đi so sánh các phần tử khác
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < MIN_VALUE) MIN_VALUE = arr[i];
// }
// console.log(MIN_VALUE);

// let a = 4
// Bài 3:
// let today = [];
// let b = parseInt(prompt("Nhập số phần tử của mảng:"));
// //
// for (let i = 0; i < b; i++) {
//   let input = parseInt(prompt(`Nhap 1 so nguyen thu ${i + 1}`));
//   today.push(input);
// }
// // [2,4,6,7,3]
// for (let i = 0; i < today.length; i++) {
//   if (today[i] % 2 === 0) console.log(today[i]);
// }
// let count = 0;
// // count++;
// let sum = 0;
// n = 5 -> [ 2,4,2,2,2]
// k = 2
// Output: 4
// Bài 4:
// let yesterday = [];
// let b = parseInt(prompt("Nhập số phần tử của mảng:"));
// //
// for (let i = 0; i < b; i++) {
//   let input = parseInt(prompt(`Nhap 1 so nguyen thu ${i + 1}`));
//   yesterday.push(input);
// }
// let k = parseInt(prompt("Nhập số nguyên k:"));
// let count = 0;
// //  yesterday [2,3,4,5,6]
// //  yesterday[0] yesterday[1] yesterday[2] yesterday[3] yesterday[4]
// for (let i = 0; i < b; i++) {
//   if (yesterday[i] === k) count++;
// }
// console.log(count);
/*
Cho 1 mảng gồm n phần tử và 1 số nguyên k được nhập từ bàn phím, tìm vị trí phần tử đầu tiên bằng k, nếu không tìm thấy in ra -1
   Ví dụ 1: n = 5. arr = [2,4,5,5,5] ; k = 5
-> In ra 2 (vì vị trí đầu tiên xuất hiện số 5 là 2)

   Ví dụ 2: n = 3. arr = [2,4,5] ; k = 7
-> In ra -1 (vì trong mảng không có phần tử nào = 7)
*/

let array = [];
let b = parseInt(prompt("Nhập số phần tử của mảng:"));

for (let i = 0; i < b; i++) {
  let input = parseInt(prompt(`Nhap 1 so nguyen thu ${i + 1}`));
  array.push(input);
}
let k = parseInt(prompt("Nhập số nguyên k:"));
let position = -1;
for (let i = 0; i < b; i++) {
  if (k === array[i]) {
    position = i;
    break;
  }
}
console.log(position);
/*
## Nhập và một số nguyên dương n, arr. Đếm trong mảng có tất cả bao nhiêu số nguyên tố?

Input: n = 5 -> [3, 4, 5, 6, 7]
Output: 3 (3 , 5 ,7 ) là số nguyên tố
*/
