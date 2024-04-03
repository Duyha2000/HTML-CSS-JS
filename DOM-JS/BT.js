// let products = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 5, name: "Yakult", count: 100 },
//   { id: 3, name: "Yakult", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 9, name: "Yakult", count: 100 },
//   { id: 8, name: "Yakult", count: 100 },
//   { id: 7, name: "Butter", count: 100 },
// ];
// products.push({ id: 4, name: "yagourt", count: 100 });
// // Tìm được vị trí của phần tử có id = 2 và xóa phần tử đấy
// // findIndex -> tìm vị trí:
// const index = products.findIndex((product) => product.id === 2); // nếu có trả về vị trí phần tử đấy, còn không có trả về -1

// console.log(index);
// // splice
// products.splice(index, 1);

// console.log(products);

// //
// products[2].count = 20;
// console.log(products[2]);

// let isCheck = false;
// let result = "";
// for (let i in products) {
//   if (products[i].name == "Butter") {
//     isCheck = true;
//     result = products[i].name;
//   }
// }
// if (isCheck) console.log(result);
// else {
//   console.log("Value does not exit");
// }

//bài tập 6:let stores = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// let carts=[]
//Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
//C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
//R – In ra toàn bộ các sản phẩm trong stores và carts
//U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
//D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại
//E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let carts = [];
let isCheck = true;

while (isCheck) {
  let choice = prompt("Nhập vào 5 chữ cái C/R/U/D/E");
  switch (choice) {
    case "C":
      let nameProduct = prompt("Nhập sản phẩm muốn mua: ");

      // Tìm kiếm sản phẩm trong cửa hàng
      let productIndexStore = stores.findIndex(
        (product) => product.name === nameProduct
      );

      // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa bằng some
      // Phương thức some() được gọi trên mảng carts. Phương thức này sẽ trả về true nếu có ít nhất một phần tử trong mảng thỏa mãn điều kiện được chỉ định, và ngược lại trả về false.
      // Nếu có ít nhất một sản phẩm có tên giống nameProduct, biến productInCart sẽ được gán giá trị true, ngược lại sẽ là false.
      // Ví dụ, nếu bạn muốn kiểm tra xem sản phẩm có tên là "Milk" có trong giỏ hàng hay không, đoạn code này sẽ trả về true nếu có ít nhất một sản phẩm trong giỏ hàng có tên là "Milk", và ngược lại trả về false.
      let productInCart = carts.some((product) => product.name === nameProduct);

      if (productInCart) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng mua
        carts.find((product) => product.name === nameProduct).count++;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
        carts.push({
          id: stores[productIndexStore].id,
          name: stores[productIndexStore].name,
          count: 1, // Bắt đầu với count = 1 vì là lần đầu tiên mua sản phẩm này
        });
      }

      // Giảm số lượng sản phẩm trong cửa hàng đi 1
      stores[productIndexStore].count--;

      break;

    case "R":
      console.log("Stores: ", stores);
      console.log("Carts: ", carts);
      break;
    case "E":
      isCheck = false;
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
      break;
  }
}
