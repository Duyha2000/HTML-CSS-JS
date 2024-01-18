// Basic type
// let sum: number | string = "5";
let count: number = 0;
// interface thường được để khai báo kiểu dữ liệu cho object
interface Person {
  id: number;
  name: string;
  age?: number;
  data: {
    id: number;
    name: string;
    address: string;
  };
}
const person: Person = {
  id: 1,
  name: "Duc",
  age: 20,
  data: {
    id: 1,
    name: "Dung",
    address: "Ha Noi",
  },
};
console.log(person.name);
console.log(person.data.address);
// Array:
let numberArray: (number | string)[] = [1, 2, 3, 4, 5];

let numberArray2: Array<number | string> = [1, 2, 3, 4, "5"];
// Tuple: Mảng có kiểu dữ liệu cố định
let tuple: [number, string] = [1, "2"];
// Function type
// Cach 1: Khai báo kiểu dữ liệu cho function
const sum = (a: number, b: number): number => {
  return a + b;
};

// Cach 2: Khai báo kiểu dữ liệu cho function
type sumType = (a: number, b: number) => number;
const sum2: sumType = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));
// Enum: liet ke
enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}
// enum Role {
//   ADMIN = "admin",
//   USER = "user",
//   MANAGER = "manager",
// }
console.log(Color.RED);
// console.log(Role.ADMIN);
// Any: Kiểu dữ liệu bất kì
let anyType: any = 3;
// void: Không có kiểu dữ liệu trả về
const display = (): void => {
  console.log("Hello");
};
// tuple type : Mảng có kiểu dữ liệu cố định

// intersection type: hợp của 2 kiểu dữ liệu
const students2: [string, number, number] = ["evondev", 30, 30];
type Student1 = {
  name: string;
  age: number;
  mark: number;
};
type Student2 = {
  id: number;
  age: number;
  mark: number;
};
type Student = Student1 & Student2;
const student: Student = {
  name: "evondev",
  age: 30,
  mark: 10,
  id: 1,
};
// Partial type: Cho phép 1 object có thể thiếu 1 số thuộc tính
type Product = {
  id: number;
  name: string;
  price: number;
};
// Omit type: Cho phép 1 object bỏ đi 1 số thuộc tính
type Product2 = Omit<Product, "price">;
const product: Product2 = {
  id: 1,
  name: "Iphone",
};
interface IProduct {
  readonly id: number;
  name: string;
  price: number;
}
interface IProduct2 extends IProduct {
  quantity: number;
}
type address = {
  address: string;
  location: string;
};
type Product3 = Omit<IProduct2, "name"> & Partial<address>;
const product3: Readonly<Product3> = {
  id: 1,
  price: 1000,
  quantity: 10,
  address: "Ha Noi",
  // location: "Viet Nam",
};
type Role = "admin" | "user" | "manager";
const roleAdmin: Role = "admin";
const roleUser: Role = "user";

if (roleAdmin) console.log(roleAdmin);
else if (roleUser) console.log(roleUser);
else console.log("AAA");
