// tạo ra thông tin để lưu dữ liệu trên local
// localStorage.setItem("name", "123");
// truy xuất thông tin
// const a = localStorage.getItem("name");
// document.write(a);
// xóa thông tin của key
// localStorage.removeItem("name");
const cart = [1, 2, 3, 4, 5];
// lưu dữ liệu của mảng/object -> JSON.stringify (biến mảng thành chuỗi JSON) ->truy xuất xử dụng JSON.parse để chuyển lại thành mảng
localStorage.setItem("cart", JSON.stringify(cart));
const cartValue = JSON.parse(localStorage.getItem("cart"));
console.log(typeof cartValue, "aaa");
// JSON.Stringify
