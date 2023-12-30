const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
// Mảng lưu trữ thông tin học sinh
let listStudent = JSON.parse(localStorage.getItem("listStudent")) ?? [];
// Truy xuất DOM
let fullName = document.querySelector("#fullName");
let date = document.querySelector("#date");
let gender = document.querySelector("#gender");
let classmate = document.querySelector("#classmate");
let image = document.querySelector("#image");

// Hiển thị các số từ 1 -> 5 bằng innerHTML
function display() {
  let html = " ";
  for (let i = 0; i < listStudent.length; i++) {
    html += `
    <tr>
        <td>${listStudent[i].fullName}</td>
        <td>${listStudent[i].date}</td>
        <td>${listStudent[i].gender}</td>
        <td>${listStudent[i].classmate}</td>
        <td>${listStudent[i].image}</td>
        <td><button onclick="editStudent('${listStudent[i].id}')">Edit</button></td>
        <td><button onclick="deleteStudent('${listStudent[i].id}')">DELETE</button></td>
    </tr>  
     `;
  }
  document.querySelector("#tbody1").innerHTML = html;

  fullName.value = "";
  date.value = "";
  gender.value = "";
  classmate.value = "";
  image.value = "";
}
// Thêm học sinh
function addStudent() {
  listStudent.push({
    id: uuidv4(),
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  });
  display();
  saveToLocalStorage();
}

// findIndex: trả về phần tử đầu tiên thỏa mãn điều kiện -> không có trả về -1
// Xóa học sinh (findIndex + splice)
function deleteStudent(studentId) {
  const index = listStudent.findIndex((student) => student.id === studentId);
  listStudent.splice(index, 1);
  saveToLocalStorage();
  display();
}
// CHỉnh sửa thông tin học sinh
// B1: Khi click vào edit sẽ hiển thị tất cả thông tin học sinh lên table -> tahy button add = button save
function editStudent(studentId) {
  document.querySelector("#add").style.display = "none";
  document.querySelector("#save").style.display = "block";
  // TÌm được học sinh đấy nằm ở vị trí nào = findIndex
  const index = listStudent.findIndex((student) => student.id === studentId);
  let student = listStudent[index];
  fullName.value = student.fullName;
  date.value = student.date;
  gender.value = student.gender;
  classmate.value = student.classmate;
  image.value = student.image;
  document.querySelector("#save").value = studentId; // 3
}

// B2: Edit thông tin của form -> click button save -> dữ liệu sẽ được cập nhật lại và reset lại form
function saveStudent() {
  document.querySelector("#save").style.display = "none";
  document.querySelector("#add").style.display = "block";
  let studentId = document.querySelector("#save").value;
  // 3
  const index = listStudent.findIndex((student) => student.id === studentId);
  listStudent[index] = {
    id: studentId,
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  };
  saveToLocalStorage();
  display();
}
function saveToLocalStorage() {
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
}

display();
