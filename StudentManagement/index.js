// 1. Tạo 1 mảng lưu trữ thông tin học sinh:
// truthy: khi ep kieu boolean 1 bien ra gia tri true
// console.log(Boolean(NaN));
// Các loại falsy trong JS: NaN, 0, "", undefined, null, false
// Toán tử ||: trả về giá trị truthy đầu tiên
// push, filter, sort: chỉ thao tác được với mảng
// null, string,... không dùng được các phương thức này
// Lấy dữ liệu từng ô input
const fullName = document.getElementById("fullName");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const classmate = document.getElementById("classmate");
const image = document.getElementById("image");
let students = JSON.parse(localStorage.getItem("students")) || [];

console.log(JSON.parse(localStorage.getItem("students")));
let tbody = document.getElementById("tbody1");
function displayData() {
  let html = "";
  for (let i in students) {
    html += ` 
  <tr>
    <td>${students[i].fullName}</td>
    <td>${students[i].date}</td>
    <td>${students[i].gender}</td>
    <td>${students[i].classmate}</td>
    <td>${students[i].image}</td>
    <td><button>Edit</button></td>
    <td><button onclick="deleteStudent('${students[i].id}')">Delete</button></td>
    </tr>  
  `;
  }
  tbody.innerHTML = html;
  // Set giá trị value thành chuỗi rỗng
  // Sau khi submit form cần reset lại các giá trị ô input
  fullName.value = "";
  date.value = "";
  gender.value = "";
  classmate.value = "";
  image.value = "";
}
// Delete student:
function deleteStudent(studentId) {
  console.log(studentId);
  // 2 bước để xóa
  // B1: Tìm được vị trí của phần tử có id trong mảng
  const index = students.findIndex((student) => student.id == studentId);
  students.splice(index, 1);
  // B2: Xóa phần. tử bằng splice
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Xóa student thành công!");
  console.log(index);
}
displayData();

function addStudent() {
  const newStudent = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  };
  students.push(newStudent);
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  console.log(students);
  alert("Thêm học sinh mới thành công!!!!");
}
// tbody.innerHtml = ...
