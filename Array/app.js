// Mảng
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = 5;
// Tạo mảng
let arr = [a, b, c, d, e];
// const carts1 = ["evondev", "tuan", "nam", "thanh", "trung"];

// Giả sử có 1 mảng là 1 giỏ hàng
// Phương thức hay dùng của mảng nên biết
const cart = ["iphone", "samsung", "sony", "toshiba", "sharp"];

// Thêm 1 sản phẩm vào giỏ hàng (sử dụng push)
cart.push("sony");
console.log(cart);
// Hiển thị số lượng sản phẩm của đơn hàng: length -> trả về độ dài của mảng
console.log(cart.length);

// Splice: Xóa 1 phần tử trong giỏ hàng (xóa sony)
cart.splice(2, 1);
console.log(cart);

// Sort: sắp xếp các phần tử trong mảng (tăng - giảm dần)
// Sắp xếp giá sản phẩm tăng dần - giảm dần
const prices = [19000, 22000, 40000, 33000, 10000];
// price.sort(); // tang dan

// giảm dần
prices.sort((a, b) => b - a);

console.log(prices);
// Map duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu

// const price2 = prices.map((price) => price * 2);
// console.log(price2);

// .reduce((a, b) => {}, initialize value);
// Thường được sử dụng để tính giá tiền của giỏ hàng
const totalNumber = prices.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);

// Dùng để filter(sàng lọc) các phần tử trong mảng thoả điều kiện nào đó
// Lọc giá sản phẩm trong 1 khoảng giá nào đó
// const listNumber = [1, 2, 3, 4, 5];
const priceGreater30000 = prices.filter((item) => item > 30000);
console.log(priceGreater30000);

// forEach(callback(value, index, array))
const price3 = prices.forEach((price) => price * 3);
console.log(prices);

// Map

// Spread Operator - destructuring array - rest parameter ... :  Copy 1 mảng sang 1 mảng mới và thêm panasonic

// Spread Operator: toán tử ... để thêm 1 sản phẩm vào giỏ hàng khác
const cart2 = [...cart, "panasonic"];
console.log(cart2);

// Destructuring Array: lấy 1 vài thông tin sản phẩm của đơn hàng
// Rest Parameter : lấy tất cả phần còn lại của đơn hàng
const [firstItem, secondItem, ...restOfItems] = cart2;
console.log("First Item:", firstItem);
console.log("Second Item:", secondItem);
console.log("Rest of Items:", restOfItems);
