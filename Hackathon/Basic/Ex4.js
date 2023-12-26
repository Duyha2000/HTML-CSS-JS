let input = prompt("Nhập vào chuỗi kí  số và chữ");
let result = "";
for (let i = 0; i < input.length; i++) {
  // Not a number : kh phải số
  if (!isNaN(input[i])) result += input[i];
}
console.log(result);
