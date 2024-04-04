// Lấy dữ liệu từ localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];

function handleSubmit(event) {
  event.preventDefault();

  // Lấy các giá trị từ các trường nhập liệu
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const country = document.getElementById("country").value;
  let gender;
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }

  // Tạo một đối tượng học viên từ các giá trị đã lấy
  const student = {
    id: Math.floor(Math.random() * 1000),
    fullName,
    email,
    phoneNumber,
    country,
    gender,
  };

  // Thêm đối tượng học viên mới vào mảng
  students.push(student);

  // Lưu lại mảng vào localStorage
  localStorage.setItem("students", JSON.stringify(students));

  // Hiển thị cảnh báo
  alert("Dữ liệu đã được lưu vào localStorage!");

  // Reset form
  event.target.reset();
}

function renderTable() {
  // Lấy dữ liệu từ localStorage

  // Lấy thẻ <table> trong HTML
  const table = document.getElementById("table");

  // Xây dựng HTML cho tiêu đề của bảng
  let tableHTML = "<tr>";
  const headers = [
    "STT",
    "Họ và tên",
    "Email",
    "Số điện thoại",
    "Quê quán",
    "Giới tính",
    "Hành động",
  ];
  headers.forEach((header) => {
    tableHTML += `<th>${header}</th>`;
  });
  tableHTML += "</tr>";

  // Duyệt qua mỗi đối tượng học viên và thêm vào bảng
  students.forEach((student) => {
    tableHTML += "<tr>";
    Object.values(student).forEach((value) => {
      tableHTML += `<td>${value}</td>`;
    });

    // Thêm cell cho cột hành động
    tableHTML += "<td>";
    tableHTML += `<button onclick="editStudent('${student.fullName}')">Edit</button>`;
    tableHTML += `<button onclick="deleteStudent('${student.id}')">Delete</button>`;
    tableHTML += "</td>";

    tableHTML += "</tr>";
  });

  // Gán HTML vào thẻ <table>
  table.innerHTML = tableHTML;
}

// Hàm xử lý khi nhấn nút Edit
function editStudent(fullName) {
  // Thêm logic xử lý cho nút Edit ở đây
  alert("Bạn đã nhấn nút Edit cho học viên " + fullName);
}

// Hàm xử lý khi nhấn nút Delete
function deleteStudent(id) {
  // Thêm logic xử lý cho nút Delete ở đây
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students.splice(i, 1);
      break;
    }
  }
  console.log(students);
  JSON.parse(localStorage.setItem("students", students));
  renderTable();
}
renderTable();
