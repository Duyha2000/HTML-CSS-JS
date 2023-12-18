let isFlag = true;
while (isFlag) {
  console.log(
    "Menu gồm:\n" +
      "- Tính chu vi và diện tích hình chữ nhật.\n" +
      "- Tính chu vi và diện tích hình tam giác.\n" +
      "- Tính chu vi và diện tích hình tròn.\n" +
      "- Thoát"
  );
  let choice = parseInt(prompt("Nhap lua chon cua ban"));
  switch (choice) {
    case 1:
      let width = parseInt(prompt("Nhap chieu rong"));
      let height = parseInt(prompt("Nhap chieu cao"));
      console.log(`Dien tich la: ${width * height}`);
      console.log(`Chu vi la: ${(width + height) * 2}`);
      break;
    case 2:
      // S = √p x (p – a) x (p – b) x ( p – c)
      // p la nửa chu vi tam giác
      let a = parseInt(prompt("Nhap canh thu 1"));
      let b = parseInt(prompt("Nhap canh thu 2"));
      let c = parseInt(prompt("Nhap canh thu 3"));
      p = (a + b + c) / 2;
      console.log(`Chu vi la: ${a + b + c}`);
      let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      console.log(`Dien tich la: ${S}`);
      break;
    case 3:
      let R = parseInt(prompt("Nhap ban kinh R: "));
      const PI = 3.14;
      console.log(`Chu vi la: ${2 * PI * R}`);
      console.log(`Dien tich la: ${PI * R * R}`);
      break;
    case 4:
      isFlag = false;
      break;
  }
}
