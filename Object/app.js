let user = {
  id: 1, // cmnd: mỗi người sẽ có 1 id khác nhau
  age: undefined,
  name: "Duy",
  address: "Tan Binh",
  city: "Viet Nam",
};
// Cách bình thường
// let id = user.id;
// let address = user.address;
// let city = user.city;
// Destructuring object
// let { id, address, city } = user;
// console.log(id, address, city);
// Truy cập thuộc tính city mà không sử dụng optional chaining
console.log(user.age); // Dòng này có thể gây ra lỗi nếu user là null hoặc undefined
console.log(5);

// primitives value: tham trị - object : tham chiếu

// Map: trả về một mảng đã biến đổi trong khi vẫn giữ nguyên bản gốc
// Thường được dùng để lấy giá trị trong object
// Pass a function to map

const students = [
  {
    name: "Duy",
    age: 22,
    male: true,
    phoneNumber: +84123456789,
  },
  { name: null, age: 25, male: false, phoneNumber: +84123456789 },
  { name: "Duc", age: 23, male: false, phoneNumber: +84123456789 },
];

// Sử dụng map để tạo mảng mới chứa thông tin name, age, và phoneNumber2 từ mỗi student
// Tương tác 1 thẻ html ta cần lấy id của nó ra bằng document.getElementById

const studentData =
  students.map(({ name, age, phoneNumber }) => {
    return `<p>Name: ${
      name ?? "N/A"
    }, Age: ${age}, Phone Number: ${phoneNumber}</p>`;
  }) ?? [];
console.log(studentData);
document.getElementById("title").innerHTML = studentData.join("");

// Tham trị - tham chiếu
