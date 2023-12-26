const formTotal = document.querySelector("#form-total");

const getAccount = JSON.parse(localStorage.getItem("account")) ?? {
  username: "",
  password: "",
};
console.log(getAccount);
formTotal.innerHTML = `${getAccount.username}  ${getAccount.password}`;
