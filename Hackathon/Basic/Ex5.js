let str = "This is an example!";
// This is an example!
// map: lấy ra từng chữ và mất khoảng trắng
// split: biến 1 chuỗi thành mảng ["This", "is", "an", "example"]
// ["This", "is", "an", "example"]
console.log(str.split(" "), "AAA");

str = str.split(" ").map((word) => {
  console.log(word.split(""), "AAA");
  return word.split("").reverse().join("");
});

alert(`Chuỗi đã được đảo ngược ${str.join(" ")}`);
