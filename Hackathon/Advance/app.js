let selectedItemValue = null;

const items = Array.from(document.querySelectorAll(".item"));
// Get the input fields and error message elements
const dateInput = document.getElementById("date");
const dateError = document.getElementById("dateError");
const cvcInput = document.getElementById("cvc");
const cvcError = document.getElementById("cvcError");

// Add input event listener to date input field
dateInput.addEventListener("input", () => {
  const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegEx.test(dateInput.value)) {
    dateError.textContent = "Invalid date format. Expected format: YYYY-MM-DD";
  } else {
    dateError.textContent = "";
  }
});

// Add input event listener to cvc input field
cvcInput.addEventListener("input", () => {
  const cvcRegEx = /^\d{3}$/;
  if (!cvcRegEx.test(cvcInput.value)) {
    cvcError.textContent = "Invalid CVC. Expected a three-digit number";
  } else {
    cvcError.textContent = "";
  }
});
const handleItemClick = (item, index) => {
  item.onclick = () => {
    items.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedItemValue = index + 1;
  };
};

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedItemValue = index + 1;
  });
});

const validateInput = (date, cvc) => {
  const dateError = document.getElementById("dateError");
  const cvcError = document.getElementById("cvcError");

  const isDateValid = /^\d{4}-\d{2}-\d{2}$/.test(date);
  dateError.textContent = isDateValid
    ? ""
    : "Invalid date format. Expected format: YYYY-MM-DD";

  const isCvcValid = /^\d{3}$/.test(cvc);
  cvcError.textContent = isCvcValid
    ? ""
    : "Invalid CVC. Expected a three-digit number";

  return isDateValid && isCvcValid;
};

const handleSubmit = (event) => {
  event.preventDefault();

  const dateValue = document.querySelector("#date").value;
  const cvcValue = document.querySelector("#cvc").value;

  if (validateInput(dateValue, cvcValue)) {
    // Tạo một đối tượng với các trường tương ứng
    const formData = {
      selectedItemValue: selectedItemValue,
      dateValue: dateValue,
      cvcValue: cvcValue,
    };

    // Chuyển đổi đối tượng thành chuỗi JSON và lưu vào localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Cập nhật dữ liệu trên trang HTML
    displayData();
  }
};

const displayData = () => {
  const formData = JSON.parse(localStorage.getItem("formData")) ?? {};

  // Destructuring formData
  const {
    selectedItemValue = "No data",
    dateValue = "No data",
    cvcValue = "No data",
  } = formData;

  // Lấy phần tử HTML để hiển thị dữ liệu
  const displayElement = document.getElementById("display");

  // Đặt nội dung của phần tử HTML
  displayElement.innerHTML = `
    Selected Item Value: ${selectedItemValue}<br>
    Date Value: ${dateValue}<br>
    CVC Value: ${cvcValue}
  `;
};

// Hiển thị dữ liệu khi trang web được tải
displayData();
