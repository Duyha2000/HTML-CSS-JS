// Boolean: True - false
// Truthy và falsy : khi ép kiểu dữ liệu boolean trả về false thì là falsy
let str = parseInt("123");
console.log(str);
// 6 giá trị falsy: false - 0 - "" - undefined(không xác định) - null (không có giá trị) - NaN
let result = Boolean(undefined);
console.log(result);

// || sẽ trả về giá trị truthy đầu tiên -> nếu không tìm thấy giá trị thuthy thì sẽ trả về giá trị cuối cùng
let resul2 = "" || "" || undefined;
console.log(resul2);

// && sẽ trả về giá trị falsy đầu tiên -> nếu không tìm thấy giá trị falsy thì sẽ trả về giá trị cuối cùng
let resul3 = "" && "" && undefined;
console.log(resul3);
// ??
// Ex1:
let name = null; //  null
console.log(name ?? "Người dùng ẩn danh");

// Ex2:
// productData?.content nếu không có dữ liệu sẽ mang giá trị null or undefined
const selectFilterProductData = (productData?.content ?? []).map((item) => ({
  value: item?.id,
  label: item?.name,
}));
