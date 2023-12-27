// Mỗi lần add 1 student sẽ generate ra 1 ID mới (liên tưởng mỗi học sinh có 1 Mã số sinh viên khác nhau nên cần ID để phân biệt được)
const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
// Tạo 1 mảng hiển thị thông tin của sinh viên: nếu ở local chưa có học sinh nào thì ta sẽ dùng ?? để hiển thị ra mảng rỗng []
// nếu đã có hiển thị thông tin mảng đấy ra để dùng vòng lặp for kết hợp innerHtml hiển thị ra giao diện
let listStudent = JSON.parse(localStorage.getItem("listStudent")) ?? [];
// Truy xuất các phần tử trong DOM
let fullName = document.querySelector("#fullName");
let date = document.querySelector("#date");
let gender = document.querySelector("#gender");
let classmate = document.querySelector("#classmate");
let image = document.querySelector("#image");

// Hiển thị sinh viên ra ngoài giao diện
function display() {
  let html = ``;
  for (let i = 0; i < listStudent.length; i++) {
    html += `
    <tr>
        <td>${listStudent[i].fullName}</td>
        <td>${listStudent[i].date}</td>
        <td>${listStudent[i].gender}</td>
        <td>${listStudent[i].classmate}</td>
        <td><img id="img1" style="width:200px;height:200px; object-fit:cover" src="${listStudent[i].image}"></td>
        <td><button onclick="editStudent('${listStudent[i].id}')">EDIT</button></td>
        <td><button onclick="deleteStudent('${listStudent[i].id}')">DELETE</button></td>
    </tr>
`;
  }
  document.querySelector("#tbody1").innerHTML = html;
  // Reset form sau khi submit thành công
  fullName.value = "";
  date.value = "";
  gender.value = "";
  classmate.value = "";
  image.value = "";
}

// Thêm sinh viên: mỗi sinh viên là 1 object(đối tượng), nên sau khi input sẽ lấy value các thuộc tính và push vào mảng Student
function addStudent() {
  listStudent.push({
    id: uuidv4(),
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  });
  // Sau khi xóa xong sẽ display để hiển thị lại bảng
  display();
  // Sau khi xóa xong sẽ cập nhật lại local
  saveToLocal();
}

// Delete 1 học sinh
function deleteStudent(studentId) {
  // Tìm vị trí của phần tử trong mảng (dùng findIndex)
  const index = listStudent.findIndex((student) => student.id === studentId);
  // Xóa 1 sinh viên (hay kết hợp giữa findIndex và splice để xóa)
  listStudent.splice(index, 1);
  // Sau khi xóa xong sẽ display để hiển thị lại bảng
  display();
  // Sau khi xóa xong sẽ cập nhật lại local
  saveToLocal();
}

// Chỉnh sửa thông tin sinh viên (gồm 2 bước)
// B1: Khi ấn edit sẽ hiển thị toàn bộ thông tin của sinh viên lên table
// B2: Từ thông tin đấy ta bắt đầu chính sửa
function editStudent(studentId) {
  // Khi click button edit sẽ hiển thị button Save thay cho button add
  document.querySelector("#save").style.display = "block";
  document.querySelector("#add").style.display = "none";

  // Tìm được vị trí của student và tiến hành hiển thị ra
  let index = listStudent.findIndex((student) => student.id === studentId);
  let student = listStudent[index];

  fullName.value = student.fullName;
  date.value = student.date;
  gender.value = student.gender;
  classmate.value = student.classmate;
  image.value = student.image;
  document.querySelector("#save").value = studentId;
}
// Save
function saveStudent() {
  // Khi click button save sẽ hiển thị button ADD thay cho button Save
  document.querySelector("#save").style.display = "none";
  document.querySelector("#add").style.display = "block";

  let studentId = document.querySelector("#save").value;
  let index = listStudent.findIndex((student) => student.id === studentId);

  // Update the student information based on the ID
  listStudent[index] = {
    id: studentId,
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  };

  display();
  saveToLocal();
}

// local
function saveToLocal() {
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
}

display();
