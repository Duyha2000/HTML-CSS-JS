// const button = document.querySelector("button");
// const div = document.querySelector("div");
// Ô nhập liệu
//   prompt("Bạn đã đủ 18 tuổi hay chưa?");

//   Thông báo ra cho người dùng
// alert("Hello world");
// console.log("Tôi là gay");
// In chữ ra màn hình
// document.write("Tôi là bê đê");

//   button.addEventListener("click", () => {
//     div.style.backgroundColor = "green";
//   });
// Square - Rectangle - Area - Perimeter
//
// camelCase: chữ cái đầu tiên viết thường, các chữ cái tiếp theo viết hoa
// const: hằng số / 1 biến không thể thay đổi giá trị
// PI = 3.14

// interger: int -  Số nguyên là số không có phần thập phân ( -3 , 2 , 0 , 1)
// float/double: số thực - 3.14, 2.5, 1.5
// string: chuỗi - "Hello world", "Tôi là bê đê", "3.14"
// ký tự: chacracter (char) - "a", "b", "c", "d"
// boolean: true/false - 1/0
// null: giá trị rỗng. Ví dụ: let a = null;
// undefined: chưa được định nghĩa. Ví dụ: let a;
// Khởi tạo và khai báo biến:
// từ khóa + tên biến = giá trị
// Từ khóa: var (variable) - let - const (constant)
// var age = 18;
// let fullName = "tran thi huyen tran";
// const uppercaseFullName = fullName.toUpperCase();
// const lowercaseFullName = fullName.toLowerCase();

// && - shift + 7: và (and)
// BT1: 1 form gồm tên đăng nhập và mật khẩu, tên đăng nhập phải có ít nhất 6 ký tự, mật khẩu phải có ít nhất 8 ký tự và phải viết hoa hoàn toàn.
// let username = "huyentran";
// let password = "TRANHUYEN";
// const lengthUsername = username.length;
// const lengthPassword = password.length;
// if (
//   lengthUsername >= 6 &&
//   lengthPassword >= 8 &&
//   password === password.toUpperCase()
// ) {
//   console.log("Đăng nhập thành công");
// } else {
//   console.log("Đăng nhập thất bại");
// }
// BT2: Cho 1 số nguyên và kiểm tra số đó là dương hay âm, nếu dương in ra "Số dương", nếu âm in ra "Số âm"

// Nếu  thỏa mãn in ra đăng nhập thành công
// Nếu sai in ra đăng nhập thất bại

// const age = 18;
//if( age > 18) console.log("Bạn đã đủ lớn")
// else console.log("Bạn chưa lớn")
// Sử dụng câu lệnh if - else
// let address = "Hà Nội";
// Length: kiểm tra độ dài của chuỗi
// const lengthStr = address.length;
// if (lengthStr === 0) {
//   console.log("Địa chỉ không được để trống");
// }

let isGay = true; // true /false (boolen)
const PI = 3.14;
// Text thì " " hoặc ' ', biến thì không cần
// document.write(age);
// document.write("Tôi " + age + " tuổi");
// Tôi là Trần Thị Huyền Trân, tôi 18 tuổi, tôi ở Hà Nội

// Backtick: `` - Template string - String literals
// document.write(`Tôi là ${fullName} tôi ${age} tuổi Tôi Ở  ${address}`);
// document.write(`Tôi là ${fullName} tôi ${age} tuổi Tôi Ở  ${address}`);

// Nhập giá trị trong Javascript dùng prompt:
// const age = prompt(parseInt("Nhập tuổi của bạn"));
// if (age >= 18) console.log("Bạn đã đủ tuổi");
// else console.log("Bạn chưa đủ tuổi");
const number = parseInt(prompt("Nhập số nguyên"));
if (number > 0) console.log("Số dương");
else console.log("Số âm");
