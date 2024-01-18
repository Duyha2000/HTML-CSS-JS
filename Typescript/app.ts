let firstName: string = "John";
console.log(firstName);
let age: number = 30;
console.log(age);

// Interface trong Typescript là một cấu trúc dữ liệu mà nó chỉ định kiểu dữ liệu và các thuộc tính bắt buộc của đối tượng.
// interface Student {
//   id: number | string;
//   firstName: string;
//   lastName: string;
//   age: number;
// }
// Object trong Typescript là một cấu trúc dữ liệu mà nó chỉ định kiểu dữ liệu và các thuộc tính bắt buộc của đối tượng.
// const student: Student = {
//   id: 444444444,
//   firstName: "John",
//   lastName: "Smith",
//   age: 30,
// };
// Array trong Typescript là một cấu trúc dữ liệu mà nó chỉ định kiểu dữ liệu và các thuộc tính bắt buộc của đối tượng.
const cart2: string[] = ["apple", "orange", "banana"];
// Cú pháp khác: const cart3: Array<string> = ["apple", "orange", "banana"];

// Function type trong Typescript là một cấu trúc dữ liệu mà nó chỉ định kiểu dữ liệu và các thuộc tính bắt buộc của đối tượng.
const sum = (a: number, b: string): string => {
  return a + b;
};
console.log(sum(1, "3"));

let product = (a: number, b: number, c: number): number => {
  return a * b * c;
};

console.log(product(2, 3, 4));
let display = (n: number): void => {
  for (let i = 1; i <= n; i++) console.log(i + " ");
};
display(4);
// Union type: trong Typescript là một cấu trúc dữ liệu mà nó chỉ định kiểu dữ liệu và các thuộc tính bắt buộc của đối tượng.
let a: boolean | string = true;
console.log(a);
const displayType = (id: number | string) => {
  if (typeof id === "number") {
    console.log("id is number");
  } else if (typeof id === "string") {
    console.log("id is string");
  }
};
// Generic
const displayType2 = <T>(id: T): void => {
  console.log(typeof id);
};
displayType2<number>(1);
displayType2<string>("4");
// Enum
enum Color {
  R = "RED_FLAG",
  G = "GREEN_FLAG",
  B = "BLUE_FLAG",
}
// console.log(Color.R);
let result: string = "";
let choice: string | null = prompt("Enter your choice: ");
// switch (choice) {
//   case Color.R:
//     result = Color.R;
//     break;
//   case Color.G:
//     result = Color.G;
//     break;
//   case Color.B:
//     result = Color.B;
//     break;
//   default:
//     result = "No color";
//     break;
// }
// console.log(result);
// Nhập vào 1 ngày và xem ngày đó là ngày thứ mấy trong tuần
enum DayOfWeek {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}
switch (choice) {
  case DayOfWeek.MONDAY:
    result = DayOfWeek.MONDAY;
    break;
  case DayOfWeek.TUESDAY:
    result = DayOfWeek.TUESDAY;
    break;
  case DayOfWeek.WEDNESDAY:
    result = DayOfWeek.WEDNESDAY;
    break;
  case DayOfWeek.THURSDAY:
    result = DayOfWeek.THURSDAY;
    break;
  case DayOfWeek.FRIDAY:
    result = DayOfWeek.FRIDAY;
    break;
  case DayOfWeek.SATURDAY:
    result = DayOfWeek.SATURDAY;
    break;
  case DayOfWeek.SUNDAY:
    result = DayOfWeek.SUNDAY;
    break;
  default:
    result = "ERROR";
    break;
}
console.log(result);

let height: number = parseInt(prompt("Enter your height: ") ?? "");
let weight: number = parseInt(prompt("Enter your weight: ") ?? "");
let bmi: number = weight / (height * height);
let result2: string = "";
if (bmi < 18.5) result2 = "Underweight";
else if (bmi >= 18.5 && bmi < 25) result2 = "Normal";
else if (bmi >= 25 && bmi < 30) result2 = "Overweight";
else result2 = "Obese";
console.log(result2);
//
const arr2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// findIndex
const index: number = arr2.findIndex((item) => item === 5);
console.log(index);
// find
const item: number | undefined = arr2.find((item) => item === 5);
console.log(item);

//
interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  amount: number;
}

const cart: Product[] = [
  {
    id: 1,
    name: "apple",
    price: 10,
    qty: 5,
    amount: 50,
  },
  {
    id: 2,
    name: "orange",
    price: 5,
    qty: 5,
    amount: 25,
  },
  {
    id: 3,
    name: "banana",
    price: 3,
    qty: 5,
    amount: 15,
  },
];
// Map cart array render UI
const renderUI = (cart: Product[]) => {
  let html: string = "";
  cart.forEach((item) => {
    html += `<li>${item.name}</li>`;
  });
  return html;
};
// display primeNumber
const isPrimeNumber = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};

const displayPrimeNumber = (n: number): void => {
  for (let i = 0; i <= n; i++) if (isPrimeNumber(i)) console.log(i);
};
displayPrimeNumber(100);
// Hien thi so nguyen to tu 1 den 100
// Khai báo đối tượng Student chứa các thông tin sau: id: number, name: string, age: number, address: string
// Khai báo mảng students chứa các đối tượng Student
// Viết hàm render ra UI danh sách sinh viên
