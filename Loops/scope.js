// var - let - const
// const la hang so, khong thay doi gia tri
// var let
// const PI = 3.14;
// từ khóa var có thể sử dụng ở nhiều nơi để gán đè giá trị, còn const/let thì không
// var age = 19;

// var age = 22;
// console.log(age);

// let student = " Tran ";
// let student = " Duc "; // ??
// console.log(student);
// PI = 3.16;
// console.log(PI);
// var x = 10;
if (true) {
  const y = 20;
  console.log(x); //
}
console.log(y);

// console.log(a);
// // var: khởi tạo biến thì nó sẽ được đẩy lên đầu
// var a; // undefined

// var có phạm vi truy cập là global (tat ca / toan cuc)
// let - const có phạm vi truy cập trong cặp dấu {}

for (let i = 0; i < 5; i++) {
  var y = i * 2;
}

console.log(y);
