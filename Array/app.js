// Mảng
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = 5;
// Tạo mảng
let arr = [a, b, c, d, e];
// const carts1 = ["evondev", "tuan", "nam", "thanh", "trung"];
// Ví dụ một mảng
// index: chạy từ 0
// length: đếm từ 1
// console.log(carts1.length); // 5
// Truy xuất giá trị trong mảng qua index với cú pháp arrayName[index]
// console.log(carts1[0]);
// console.log(carts1[3]);
// Nếu không có vị trí index thì trả về undefined
// console.log(carts1[5]);
// lấy phần tử cuối cùng trong mảng, length của mảng - 1
// console.log(carts1[carts1.length - 1]);
// carts1.length = 0;
// console.log(carts1);
// []: empty array, mảng rỗng
// Phương thức hay dùng của mảng nên biết
const cart = ["iphone", "samsung", "sony", "toshiba", "sharp"];
// arrayName.method
// length -> trả về độ dài của mảng
console.log(cart.length);

// Splice: Xóa 1 phần tử trong giỏ hàng (xóa sony)
cart.splice(2, 1);
console.log(cart);

// Sort: sắp xếp các phần tử trong mảng (tăng - giảm dần)
const prices = [19000, 22000, 40000, 33000, 10000];
// price.sort(); // tang dan

// giảm dần
prices.sort((a, b) => b - a);

console.log(prices);
// Map duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu

// const price2 = prices.map((price) => price * 2);
// console.log(price2);

// .forEach(callback(value, index, array))
const price3 = prices.forEach((price) => price * 3);
console.log(prices);

// .reduce((a, b) => {}, initialize value);
const totalNumber = prices.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);

// Dùng để filter(sàng lọc) các phần tử trong mảng thoả điều kiện nào đó
// .filter(callback(value, index, array))
// const listNumber = [1, 2, 3, 4, 5];
const priceGreater30000 = prices.filter((item) => item > 30000);
console.log(priceGreater30000);

// Spread Operator - destructuring array - rest parameter ... :  Copy 1 mảng sang 1 mảng mới và thêm panasonic
const cart2 = [...cart, "panasonic"];
console.log(cart2);
// for lồng nhau
