// const a = 4;
// // const arr = [1, "2", 3, 4, 5];
// //           0   1   2  3  4
// // int arr = [1,2.2,3,4,5]
// // Chỉ số của mảng bắt đầu từ số 0
// // Tên mảng:
// // age, fullName
// const students = ["A", "B", "C"];
// // length: 3
// students.length; // 3
// // students[0] = "A"
// // students[1] = "B"
// // students[2] = "C"
// students[students.length - 1];
// // Dùng vòng lặp để truy xuất các phần tử trong mảng:
// for (let student in students) {
//   console.log(student); //
// }
// // Cách hay sử dụng hơn(99%)
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }
// // Thêm 1 phần tử vào mảng: push
// // pull: kéo về
// students.push("D");
// // Join: chuyển mảng thành chuỗi
// console.log(students.join());
// // Reverse: đảo ngược mảng lại như ban đầu:
// console.log(students.reverse());
// // Sort: sắp xếp phần tử của mảng (tăng dần, giảm dần)
// const numbers = [3, 45, 2, 5, 7];
// numbers.sort(); // sắp xếp mảng tằng dần
// console.log(numbers);
// // Sắp xếp mảng giảm dần:
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// // Concat: không dùng nữa, để nối mảng mình dùng toán tử ...
// let arr2 = [1, 2, 3];
// let arrClone = [...arr2];
// console.log(arr2);
// let arr3 = [4, 5, 6];
// // let arr = arr2.concat(arr3);
// let arr = [...arr2, ...arr3];
// console.log(arr);
// // push: đẩy phần tử vào cuối mảng
// let arr4 = [];
// arr4.push(4);
// arr4.push(5);
// console.log(arr4);
// // toString: ép kiểu sang dạng chuỗi:
// let number = 4;
// // parseInt : chuyển từ chuỗi sang số nguyên
// // parseDouble / parseFloat: chuyển từ chuỗi sang số thập phân
// console.log(arr4.toString());

//const { parseInt } = require("lodash");

// // Bài tập 1: Đảo ngược các phần tử trong mảng:
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (let i = 4; i >= 0; i--) {
//   console.log(i);
// }
// // arr = [1,4,2,5,9]
// //        0 1 2 3 4
// // Mảng sau khi được đảo ngược: [9,5,2,4,1]
// //                               0 1 2 3 4
// // for(let i=5;i>=1;i--){

// //     console.log(i);
// // }
// // for (let i = b.length - 1; i >= 0; i--) {
// //     console.log(b[i]);
// // }
// /*
// Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không. Nếu có in ra vị trí của phần tử đó.
// // // // // // arr = [1,4,2,5,9]
// // // // // // -> X = 5 -> index = 3
// // // // // // -> X = 10 -> index = -1
// // // // // // */
// // // // // // let X = parseInt(prompt("Nhap vao 1 so"));
// // // // // // let index = -1;
// // // // // // for (i = 0; i < arr.length - 1; i++) {
// // // // // //   if (X === arr[i]) index = i;
// // // // // // }
// // // // // // console.log(index);
// // // // // // Đẩy 1 phần tử vào mảng dùng push
// // // // // // splice(): thêm số 3 vào vị trí thứ 2: start: giá trị bắt đầu, deleteCount: số phần tử muốn xóa, số muốn thêm vào
// // // // // // Thêm - sửa - xóa: splice
// // // // // // arr.splice(3, 1,8);
// // // // // // Cho mảng array = [1,4,2,5,9]
// // // // // // -> a. thay thế số 9 bằng số 1
// // // // // // arr.splice(4, 1, 1);
// // // // // // // b. Xóa số 4 và số 2
// // // // // // arr.splice(1, 2);
// // // // // // // c. Thêm phần tử 8 ở vị trí đầu tiên
// // // // // // arr.splice(0, 0, 8);
// // // // // // console.log(arr);

// // // // // // Max = 9
// // // // // // let Max = 0;
// // // // // // let secondMax = 0;
// // // // // // for (let i = 0; i < arr.length; i++) {
// // // // // //   if (Max < arr[i]) {
// // // // // //     secondMax = Max;
// // // // // //     Max = arr[i];
// // // // // //   }
// // // // // //   // else if(arr[i] > secondMax&& arr[i]!=Max){

// // // // // //   // }
// // // // // // }
// // // // // // [9,9,4,2,1]
// // // // // // let arr = [1, 4, 2, 9, 9];
// // // // // // arr.sort((a, b) => b - a); // sắp xếp mảng giảm dần
// // // // // // console.log(arr[0]);
// // // // // // for (let i = 1; i < arr.length; i++) {
// // // // // //   if (arr[0] > arr[i]) {
// // // // // //     console.log(arr[i]);
// // // // // //     break;
// // // // // //   }
// // // // // // }

// // // // // // Cho 2 số a ,b và 1 phép tính (+ , - , * , /) mà người dùng nhập vào, nếu là dấu + -> a + b
// // // // // // let a = int(input());
// // // // // // let b = int(input());
// // // // // // let choice = input();
// // // // // // // switch - case: thay đổi - trường hợp
// // // // // // switch (choice) {
// // // // // //   case "+":
// // // // // //     console.log(a + b);
// // // // // //     let input = input();
// // // // // //     arr.push(input);
// // // // // //     for (let i = 0; i < arr.length; i++) {
// // // // // //       console.log(arr[i]);
// // // // // //
// // // // // // let todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// // // // // // let choice = prompt("nhap vao lua chon cua ban:");
// // // // // // switch (choice) {
// // // // // //   case "C":
// // // // // //     todoList.push("New todo");
// // // // // //     for (i = 0; i < todoList.length; i++) {
// // // // // //       console.log(todoList[i]);
// // // // // //     }
// // // // // //     break;
// // // // // //   case "R":
// // // // // //     for (i = 0; i < todoList.length; i++) {
// // // // // //       console.log(todoList[i]);
// // // // // //     }
// // // // // //     break;
// // // // // //   case "U":
// // // // // //     let input1 = prompt("ban muon update phan tu nao:");
// // // // // //     let input2 = prompt("noi dung ban muon update la gi?");
// // // // // //     todoList.splice(input1, 1, input2);
// // // // // //     for (i = 0; i < todoList.length; i++) {
// // // // // //       console.log(todoList[i]);
// // // // // //     }
// // // // // //     break;
// // // // // //   case "D":
// // // // // //     let input3 = prompt("ban muon delete phan tu nao:");
// // // // // //     todoList.splice(input3, 1);
// // // // // //     for (i = 0; i < todoList.length; i++) {
// // // // // //       console.log(todoList[i]);
// // // // // //     }
// // // // // //     break;
// // // // // //   default:
// // // // // // //     console.log("ban nhap lua chon khong dung vui long nhap lai");
// // // // // // // }
// // // // // // // let numbers = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
// // // // // // // let count = 0;
// // // // // // // for (i = 0; i < numbers.length; i++) {
// // // // // // //   if (numbers[i] >= 10) {
// // // // // // //     count++;
// // // // // // //   }
// // // // // // // }
// // // // // // // console.log(`có ${count} số nguyên lớn hơn hoặc bằng 10`);
// // // // // // let max = numbers[0];
// // // // // // let position = -1;
// // // // // // for (i = 0; i < numbers.length; i++) {
// // // // // //   if (numbers[i] > max) {
// // // // // //     max = numbers[i];
// // // // // //     position = i;
// // // // // //   }
// // // // // // }
// // // // // // console.log(position + " " + max);
// let arr = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
// let max = arr[0];
// let sum = 0;
// let average = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   sum += arr[i];
// }
// average = sum / arr.length;
// console.log(`${max} là giá trị lớn nhất`);
// console.log(`${average} la gia tri trung binh cua cac phan tu`);
// // // // let arr = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
// // // // arr.reverse();
// // // // console.log(arr);
// // // let numbers = [2, 5, 6, -3, -7, -2, -5, -9, -23, -12];
// // // let count = 0;
// // // for (let i = 0; i < numbers.length; i++) {
// // //   if (numbers[i] < 0) {
// // //     count++;
// // //   }
// // // }
// // // console.log(`có ${count} số nguyên âm trong mảng.`);

// // let arr = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
// // let isCheck = false;
// // let numberX = parseInt(prompt("Nhap so nguyen vao de kiem tra"));
// // for (let i = 0; i < arr.length; i++) {
// //   if (numberX === arr[i]) {
// //     isCheck = true;
// //   }
// // }
// // if (isCheck) {
// //   console.log(`${numberX} is in the array`);
// // } else {
// //   console.log(`${numberX} is not in the array`);
// // }
//bai 7
// let arr = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
// let numberX = parseInt(prompt("Nhap so nguyen vao de kiem tra"));
// for (let i = 0; i < arr.length; i++) {
//   if (numberX === arr[i]) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
//bai8
// let arr = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
// arr.sort((a, b) => b - a);
// console.log(arr);
//bt9:
let a = [5, 8, 9, 10, 15, 56, 78, 97, 89, 67];
let b = [2, 5, 6, -3, -7, -2, -5, -9, -23, -12];
let c = [...a, ...b];
console.log();
