// const fullName = document.getElementById("fullname");
// const email = document.getElementById("email");
// const numberphone = document.getElementById("numberphone");
// const address = document.getElementById("address");
// const male = document.getElementById("male");
// const female = document.getElementById("female");

function handleSubmit(event) {
  event.preventDefault();
  console.log("aaa");

  //   const newStudent = {
  //     id: Math.floor(Math.random() * 1000),
  //     fullName: fullName.value,
  //     email: email.value,
  //     numberphone: numberphone.value,
  //     address: address.value,
  //     male: male.value,
  //     female: female.value,
  //   };
  //   students.push(newStudent);
  //   localStorage.setItem("students", JSON.stringify(students));
  //   displayData();
  //   alert("Thêm học sinh mới thành công");
}

function displaySelectedValue() {
  let selected = document.querySelector(
    "input[type=radio][name=gender]:checked"
  );
  console.log("Selected Gender: " + selected.value);
}
