// console.log("AAA");
// let arr = prompt("Nhap 1 chuoi co 5 chu so nguyen");
// let newArr = arr.split("");

// // B1: sap xep mang
// newArr.sort(); // 0 1 3 3 4 4

// console.log(newArr);

// // 0 1 3

// // B2: Tạo ra 1 mảng mới, đẩy các phần tử mảng cũ này vào mảng mới, nếu xuất hiện phần tử rồi thì không đẩy vào mảng mới nữa
// let uniqueArr = [];
// for (let i = 0; i < newArr.length; i++) {
//   let count = 0;
//   for (let j = i + 1; j < newArr.length; j++) {
//     if (newArr[i] === uniqueArr[j]) count++;
//   }

//   if (count === 1) {
//     uniqueArr.push(newArr[i]);
//   }
// }
// console.log(uniqueArr);

// Bai 4: ko dung regex
// Cach 1: Split + filter + join
// let string = prompt("Nhap chuoi");
// let newStr = string
//   .split("") //
//   .filter((ele) => (ele >= "a" && ele <= "z") || (ele >= "A" && ele <= "Z"))
//   .join("");
// console.log("New string", newStr);
// Cach 2:
// let string = prompt("nhap day ki tu");
// let newString = "";
// for (let i in string) {
//   if (isNaN(string[i])) {
//     newString += string[i];
//   }
// }
// console.log(newString);

// Bai 5:

// const string = prompt("Nhap chuoi"); // This is an example!
// const strArr = string.split(""); // ["This","is","an","example!"]

// for (let i = 0; i < strArr.length; i++) {
//   var result = "";
//   const word = strArr[i].split(" ").reverse().join(" ");
//   result = result.concat(" ", word);
// }
// console.log(result);
// const string = prompt("Nhập chuỗi ký tự:");
// const stringArray = string.split(" ");
// let result = "";
// for (let i = 0; i < stringArray.length; i++) {
//   const word = stringArray[i].split(" ").reverse().join("");
//   console.log(stringArray[i].split(" "));
//   result = result.concat(" ", word);
// }
// console.log(result);

// function reverseString() {
//   let n = prompt("Nhập chuỗi: ");
//   let arr = n.split(" ");
//   let newStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       newStr += arr[i][j];
//     }
//     newStr += " ";
//   }
//   console.log(newStr);
// }
// reverseString();
// Huyen + Tran:
// Bai tap 5:
// const newStr = [...string].reverse().join("");
// const newString2 = newStr.split(" ").reverse().join(" ");
// console.log(newString2);
// console.log(newStr2);
// ["!elpmaxe", "na", "si","sihT"]

// Ket qua: sihT si na !elpmaxe
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let arr = [2, 3, 3, 5, 7, 8, 8, 6];
let arrPrime = [];

// Kiểm tra và thêm các số nguyên tố vào mảng arrPrime
for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    // Kiểm tra xem số nguyên tố đã tồn tại trong arrPrime hay chưa
    let isUnique = true;
    for (let j = 0; j < arrPrime.length; j++) {
      if (arrPrime[j] === arr[i]) {
        isUnique = false;
        break;
      }
    }
    // Nếu số nguyên tố chưa tồn tại trong arrPrime, thêm vào mảng
    if (isUnique) {
      arrPrime.push(arr[i]);
    }
  }
}

console.log(arrPrime); // In ra mảng các số nguyên tố duy nhất
