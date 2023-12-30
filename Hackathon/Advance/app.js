let selectedItemValue = null;

function showToast(message, isSuccess) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.classList.add("toast", isSuccess ? "success" : "error");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  toast.appendChild(progressBar);

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 3000);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

const items = Array.from(document.querySelectorAll(".item"));
const dateInput = document.getElementById("date");
const dateError = document.getElementById("dateError");
const cvcInput = document.getElementById("cvc");
const cvcError = document.getElementById("cvcError");

dateInput.oninput = () => {
  const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
  dateError.textContent = !dateRegEx.test(dateInput.value)
    ? "Invalid date format. Expected format: YYYY-MM-DD"
    : "";
};

cvcInput.oninput = () => {
  const cvcRegEx = /^\d{3}$/;
  cvcError.textContent = !cvcRegEx.test(cvcInput.value)
    ? "Invalid CVC. Expected a three-digit number"
    : "";
};

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

  const dateValue = dateInput.value;
  const cvcValue = cvcInput.value;
  const isInputValid = validateInput(dateValue, cvcValue);

  if (isInputValid) {
    const formData = {
      selectedItemValue,
      dateValue,
      cvcValue,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    displayData();
    showToast("Form submitted successfully", true);
    event.target.reset();
  } else {
    showToast("Invalid input. Please check your data and try again.", false);
  }
};

const displayData = () => {
  const formData = JSON.parse(localStorage.getItem("formData")) ?? {};

  const {
    selectedItemValue = "No data",
    dateValue = "No data",
    cvcValue = "No data",
  } = formData;

  const displayElement = document.getElementById("display");

  displayElement.innerHTML = `
    Selected Item Value: ${selectedItemValue}<br>
    Date Value: ${dateValue}<br>
    CVC Value: ${cvcValue}
  `;
};

displayData();
