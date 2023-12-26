// Input: 1 2 3 5 5
// Output : 3

// Sort : 5 5 3 1 2
// 1. Lọc ngay các số giống nhau
let arr = [1, 3, 3, 5, 5];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === arr[i]) count++;
  }
  if (count === 1) uniqueArr.push(arr[i]);
}
console.log(uniqueArr);

// 2. Lấy số lớn nhất rồi lọc số đấy nếu bị trùng
// let arr = [1, 3, 3, 5, 5];
// arr.sort((a, b) => b - a); // 5 5 3 3 1
// let max_value = arr[0]; // 5
// for (let i = 0; i < arr.length; i++) {
//   if (max_value !== arr[i]) {
//     max_value = arr[i];
//     break;
//   }
// }

// console.log(max_value);
