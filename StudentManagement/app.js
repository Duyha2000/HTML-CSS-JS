const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
// Create array
let listStudent = JSON.parse(localStorage.getItem("listStudent")) ?? [];
let fullName = document.querySelector("#fullName");
let date = document.querySelector("#date");
let gender = document.querySelector("#gender");
let classmate = document.querySelector("#classmate");
let image = document.querySelector("#image");

// Display
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
  // Reset
  fullName.value = "";
  date.value = "";
  gender.value = "";
  classmate.value = "";
  image.value = "";
}

// Add
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
  saveToLocal();
}

// Delete
function deleteStudent(studentId) {
  // Find the index of the student with the given ID
  const index = listStudent.findIndex((student) => student.id === studentId);
  // Remove the student from the list
  listStudent.splice(index, 1);
  display();
  saveToLocal();
}

// Edit
function editStudent(studentId) {
  document.querySelector("#save").style.display = "block";
  document.querySelector("#add").style.display = "none";

  // Find the student with the given ID
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
