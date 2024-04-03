// let n = parseInt(prompt("Nhap vao so nguyen n:"));
// let isPrime = true;
// for (i = 2; i < n; i++) {
//   if (n % i === 0) isPrime = false;
// }
// if (isPrime) console.log(`${n} la so nguyen to`);
// else console.log(`${n} khong phai la so nguyen to`);

// ## Bài tập 4: Nhập 1 số nguyên và tính tổng các số đó

// Ví dụ: 8243 -> Tổng = 8 + 2 + 4 + 3
let n = parseInt(prompt("Nhap vao so nguyen"));
let sum = 0;
for (let i = n; (i = 0); Math.floor(n / 10)) {
  sum = sum + (i % 10);
}
console.log(sum);
