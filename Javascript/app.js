// // const number = 100;
// // let otherNumber = 200;
// // var
// const age = 18;
// const address = "Ho Chi Minh";
// // Ho ten day du
// var fullName = "Dinh Tien Dat";
// // camelCase
// var isFullName = false;
// // Đặt tên biến cho hằng số
// // const PI = 3.14;
// // PI = 3333;
// // console.log(PI);
// // Phan biet var, let, const phai gan gia tri khi khai bao, khong doi
// // let,const chỉ khai báo từ khóa 1 lần, còn var thì thoải mái
// // const la hang so - khong the thay doi duoc
// // hoisting: var hoisting: khi khao báo biến sẽ bị đẩy lên đầu phạm vi của trang
// console.log(a);
// // var a; // undefinend
// let a;
// const age = 18;
// const id = 5;
// console.log(age);
// console.log("Toi ten la Duy " + age + " tuoi");
// // Backtick: ``
// console.log(`Toi ten la Duy ${age} tuoi va id la: ${id}`);
// // String: chuỗi -> length
// // Number: số
// const password = "12345678";
// const userName = "dinht";
// const userName = prompt("Nhap thong tin tai khoan:");
// console.log(password.length);
// if (userName.length >= 8) console.log("Success");
// else console.log("Phai nhap du 8 ky tu");

// // toUppercase: viet hoa - toLowerCase : viet thuong
// const newStr = "    Xin Chao  ";
// // console.log(newStr.toUpperCase());
// console.log(newStr.toLowerCase());
// // char - character: ky tu : 'a' 'b' 'c' 'd'
// console.log(newStr.charAt(0));
// // xoa khoang trang
// // const trimmedStr = newStr.trim();
// const trimmedStr = newStr.replace(/^\s+/, "");
// [start, end )
// console.log(trimmedStr);
// let newStr = "this is Test";
// let firstChar = newStr.charAt(0).toUpperCase(); // T
// // slice
// let restStr = newStr.slice(1); // his is Test
// console.log(restStr);
// console.log(`Ket qua la: ${firstChar}${restStr}`);
let newStr = "javascript is cool  ";
let newStr2 = newStr.trim();
let newStr3 = newStr2.replace(/a/g, "4").replace(/o/g, "3").replace(/i/g, "1");
console.log("aaa", newStr3);

// Operator: *
//  / chia lay ket qua
// % chia lay phan du
// ++ tang 1 don vi
// -- giam 1 don vi
// +=2:
// let a = 9;
// a *= 3;
// console.log(a);
// // Abs: Absolute value: gia tri tuyet doi
// let x = -9;
// console.log(Math.sqrt(x));
// console.log(Math.abs(x));
// // sqrt: căn bậc 2 - square root : căn bậc 2
// const z = "3"; // string
// d = parseInt(z); // ep kieu ve so
// console.log(d);

// let a = parseInt(prompt("Nhap so a:"));
// let b = parseInt(prompt("Nhap so b:"));
// // // "3" + "4"
// console.log(a + b);
let l = 12;
let m = "2";
console.log(l - parseInt(m));
// l+m?
// let l2 = l.toString();
// console.log(l2);
// let x = "3";
// let y = "4";
// console.log(x + y);
let math = parseInt(prompt("Nhap diem toan: "));
let physics = parseInt(prompt("Nhap diem ly: "));
let chemistry = parseInt(prompt("Nhap diem hoa: "));
let avg = (math + physics + chemistry) / 3;
console.log(`Diem trung binh 3 mon la ${avg}`);
