/* 20$ */
// let price = parseInt(prompt("Nhap so tien cua ban"));
// if (price <= 20) console.log("Toi co the mua duoc dong ho");
// else console.log("Ban khong du tien mua dong ho");

// let studentGrade = parseInt(prompt("Nhập điểm của bạn:"));
// // if (studentGrade >= 5) console.log("Ban da qua mon");
// // else console.log("Ban rot mon!!!!");
// // Ternery operator let result = condition ? true : false;
// let result = studentGrade >= 5 ? "Ban da qua mon" : "Ban se rot mon";
// console.log(result);

// = toán tử gán, == toan tu so sanh, ===
// let a = 4;
// let n = parseInt(prompt("Nhập n:"));
// // if (n % 2 == 0) console.log("Even number");
// // else console.log("Odd number");
// let result = n % 2 == 0 ? "Even number" : "Odd number";
// console.log(result);
// Sự khác nhau giữa == và ===
// let x = 3; // number - số
// let y = "3"; // string - chuỗi
// let m = 3;
// console.log(x == y); // chỉ cần cùng giá trị
// console.log(x === m); // 2 thằng cùng 1 kiểu dữ liệu và cần cùng giá trị
// let xx = 5;
// let yy = "5";
// console.log(xx == yy);
// console.log(xx === yy);
// Nhập 1 số và kiểm tra số đó có > 0 hay không?
// let n = parseInt(prompt("Nhập n:"));
// if (n > 0) console.log("Positive number");
// // console.log("Hello")
// else console.log("Negative number");
// Giữa if và else không chèn câu lệnh nào khác vào giữa
// &&: đọc là "và", || đọc là hoặc
// let a = parseInt(prompt("Nhập a:"));
// let b = parseInt(prompt("Nhập b:"));
// let c = parseInt(prompt("Nhập c:"));
// if (a > b && a > c) console.log(`The greatest number is ${a}`);
// else if (b > a && b > c) console.log(`The greatest number is ${b}`);
// else console.log(`The greatest number is ${c}`);

/* Nhập điểm của 1 học sinh,
 nếu điểm lớn hơn 100 hoặc nhỏ hơn 0 in ra không hợp lệ 
 nếu điểm nhỏ hơn 50 in ra bạn sẽ rớt môn
 nếu điểm lớn hơn hoặc bằng 50 in bạn đã qua môn
 */
// let pointStudent = parseInt(prompt("Nhập điểm của học sinh:"));
// if (pointStudent > 100 || pointStudent < 0) console.log("Điểm không hợp lệ");
// else if (pointStudent < 50) console.log("Bạn sẽ rớt môn");
// else console.log("Bạn sẽ qua môn");
// let weekdays = parseInt(prompt("Nhap so ban muon:"));
// if (weekdays === 0) console.log("Today is Sunday");
// else if (weekdays === 1) console.log("Today is Monday");
// else if (weekdays === 2) console.log("Today us Tuesday");
// else if (weekdays === 3) console.log("Today is Wednesday");
// else if (weekdays === 4) console.log("Today is Thursday");
// else if (weekdays === 5) console.log("Today is Friday");
// else if (weekdays === 6) console.log("Today is Saturday");
// else console.log("Không khả dụng");
// switch: thay đổi
// case: trường hợp
// break: thoát khỏi chương trình
// switch (weekdays) {
//   case 0:
//     console.log("Today is monday");
//     break;
//   case 1:
//     console.log("Today is Tuesday");
//     break;
//   case 2:
//     console.log("Today is Wednesday");
//     break;
//   case 3:
//     console.log("Today is Thursday");
//     break;
//   case 4:
//     console.log("Today is Friday");
//     break;
//   case 5:
//     console.log("Today is Saturday");
//     break;
//   case 6:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("Không khả dụng");
//     break;
// }
// let choice = prompt("Nhap lua chon cua ban:");
// switch (choice) {
//   case "RED_LIGHT":
//     console.log("Dừng lại");
//     break;
//   case "ORANGE_LIGHT":
//     console.log("Đi chậm lại");
//     break;
//   case "GREEN_LIGHT":
//     console.log("Đi tiếp");
//     break;
//   default:
//     console.log("Bạn đã bị công an bắt");
//     break;
// }
// Nhập điểm của bạn:
// Nếu điểm score >= 90 -> In ra điểm A
// Nếu điểm  80 <= score < 90 -> In ra điểm B
// Nếu điểm  70 <= score < 80 -> In ra điểm C
// Còn lại in ra bạn đã rớt môn
// let score = parseInt(prompt("Nhap điểm của bạn:"));
// if (score >= 90) console.log("Điểm A");
// else if (score >= 80 && score < 90) console.log("Điểm B");
// else if (score >= 70 && score < 80) console.log("Điểm C");
// else console.log("Out");

// Nhập 3 số a,b,c và in kết quả theo thứ tự giảm dần
// a = 3 b = 2 c = 9 -> In ra a = 9 b = 3 c = 2
// let a = parseInt(prompt("nhap gia tri a"));
// let b = parseInt(prompt("nhap gia tri b"));
// let c = parseInt(prompt("nhap gia tri c"));
// // a = 6 b = 8 c = 20
// if (a < b) {
//   let temp;
//   temp = a;
//   a = b;
//   b = temp;
// }
// // a = 8 b = 6 c = 20
// if (b < c) {
//   let temp;
//   temp = b;
//   b = c;
//   c = temp;
// }
// // a = 8 b = 20 c = 6
// if (a < b) {
//   let temp;
//   temp = a;
//   a = b;
//   b = temp;
// }
// console.log(`B3: ${a} ${b} ${c}`);
// Bạn Hoa cao 1m4 và bạn Trang cao 1m6
// Cả 2 bạn đều cao hơn 1m5
let heightHoa = 1.4;
let heightTrang = 1.6;
if (heightHoa > 1.5 || heightTrang > 1.5) console.log("True");
else console.log("false");
// && cần tất cả mệnh đề đều đúng
// || chỉ cần 1 mệnh đề đúng
// năm nhuận là năm hết cho 4 được và không chia hết cho 100 hoặc chia hết cho 400
// !==
// let year = parseInt(prompt("Nhap nam"));
// // if ((year % 4 === 0 && year !== 100) || year % 400 === 0)
// //   console.log(`Năm ${year} là năm nhuận`);
// // else console.log(`Năm ${year} ko là năm nhuận`);
// let result =
//   (year % 4 === 0 && year !== 100) || year % 400 === 0
//     ? `Năm ${year} là năm nhuận`
//     : `Năm ${year} ko là năm nhuận`;
// console.log(result);

// 1 vài giá trị false trong JS: 0 "" null undefined NaN: (not a number) fasle
// còn lại là true
// khi dùng && trả về giá trị false đầu tiên, nếu không có false trả về giá trị cuối cùng
// khi dùng || trả về giá trị true đầu tiên, nếu không có true thì trả về giá trị cuối cùng
let result2 = "" || undefined || 3;
console.log(result2); // 34
let a = null;
console.log(typeof a);
// Phân biệt giữa null và undefined:
// Giống nhau: đều không mang giá trị
// Khi khởi tạo 1 biến không gán giá trị gì sẽ mang giá trị là undefined
// Kiểu dữ liệu của null là object - undefined chính là undefined
