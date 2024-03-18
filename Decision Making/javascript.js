// Nếu không có tiền, thì không có gì cả
// Nếu bạn trên 18t, thì bạn đủ tuổi để xem phim hành động, nếu không, thì bạn không được xem phim này
// let age = parseInt(prompt("Nhập tuổi của bạn: "));
// // Nếu câu lệnh chỉ xử lý trên 1 dòng, không cần dùng dấu ngoặc nhọn
// if (age >= 18) console.log("Bạn đủ tuổi để xem phim hành động");
// else {
//   console.log("Bạn chưa đủ tuổi xem phim này");
// }
/*
 Bài tập 1: Hãy viết chương trình kiểm tra xem một số nguyên n được nhập từ bàn phím có phải là số chẵn hay không?
B1: Nhập vào 1 số nguyên từ bàn phím
B2: Kiểm tra xem số đó có phải là số chẵn hay không?

Nếu là số chẵn: 4 là sỗ chẵn, 3 là số lẻ, hãy in ra màn hình: Even number
Nếu không không in ra Odd number.
Ví dụ:
Cho n = 10, kết quả nên in ra như sau: "Even number"
Cho n = 151, Kết quả nên in ra là "Odd number"

-> Dùng if / else bình thường 
*/
// let n = parseInt(prompt("Nhập số nguyên n: "));
// n = 13 -> 13 / 2 = 6.5
// 13 % 2 = 1; 12 % 2 = 0
// if (n % 2 == 0) console.log("Even number");
// else console.log("Odd number");
// Phân biệt 2 dấu == và 3 dấu === trong Javascript
// Có những kiểu dữ liệu nào: boolean, string, number, null: rỗng, undefinded (khi khai báo 1 biến và không gán giá trị sẽ mang giá trị không xác định), object
let variable;
let variable2 = null;
console.log(variable);
console.log(variable2);
// Toán tử 2 dấu ==
let var1 = 3; // number
let var2 = "3"; // string
console.log(var1 == var2); // giống giá trị
// Toán tử 3 dấu ===
console.log(var1 === var2); // cùng kiểu dữ liệu và phải cùng giá trị
// True - false: 1 - 0
let var3 = true; // Giá trị là: 1 - kiểu dữ liệu là boolean
let var4 = 1; // Giá trị là 1 - kiểu dữ liệu number
// 2 dấu bằng ==
console.log(var3 == var4); // đều có cùng giá trị là 1
// 3 dấu bằng ===
console.log(var3 === var4); // khác kiểu dữ liệu

// Ví dụ của Huyền:
console.log(true == "true"); // false --> 1 chuỗi không phải dữ liệu boolean -> true có giá trị là 1

console.log(true === "true"); // false

// Ví dụ của Trân:
console.log(undefined == null); // true -->  undefined và null có giá trị giống nhau
console.log(undefined === null); // false --> k cùng kiểu dữ liệu
const ax = "450"; // number
const bx = "10";
console.log(ax == bx);
console.log(ax === bx);
const c = 0;
const d = false;
console.log(c == d);
console.log(c === d);

// Kiểm tra kiểu dữ liệu 1 biến - typeof
console.log(typeof ax);
console.log(typeof bx);
// Toán tử cộng số và chuỗi:
console.log(ax + bx); // phép cộng + trong Javasciprt nó sẽ là phép nốp chuỗi
console.log(typeof (ax - bx)); // phép trừ, nhân, chia - giống phép trừ trong 1 số
console.log(ax - bx);

// 1 số liệu toán tử trong Javascipt
let a = 8;
let b = 3;
console.log(a + b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(Math.sqrt(a)); // square root: căn bậc 2
console.log(Math.abs(-a)); // absolute: giá trị tuyệt đối
console.log(a - b);
console.log(a % b); // phép chia lấy phần dư

// Phân biệt 3 từ khóa: Var, let, const
// var: variable: biến
var age = 4; // age = 4
var age = 8; // gán đè giá trị age = 8 (đè giá trị của 4)
var age = 23;
console.log(age);

// Từ khóa var có thể sử dụng và khai ở nhiều nơi, còn let chỉ sử dụng được 1 lần khi khai báo
// let fullName = "HCM";
// fullName = "HN";
// console.log(fullName);
// const: không thay đổi, và chỉ khai báo từ khóa 1 lần duy nhất
const PI = 3.14;
// PI = 3.22
console.log(PI);

// Khởi tạo 1 biến không gán giá trị thì nó sẽ có giá trị không xác định:
var lastName;
console.log(lastName); // undefined

let age2 = 18;
age2 = 22;
console.log(age2);

// Hoisting: biến var khi được khai báo sẽ đẩy lên đầu phạm vi của scope, còn biết let và const thì vẫn giữ nguyên phạm vi truy cập
console.log(fullName);
// const fullName;
let fullName;
/*
Khác nhau: let, var, const:
- từ khóa var khai báo được nhiều lần, let, const chỉ khai báo từ khóa được 1 lần, const là hằng số nên không thể thay đổi giá trị
- Hoisting: biến var khi được khai báo sẽ được đẩy lên đầu phạm vi của biến đấy, const và let thì không bị hoisting
*/
``;
