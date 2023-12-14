## Bài tập 1: Hãy viết chương trình kiểm tra xem một số nguyên n được nhập từ bàn phím có phải là số chẵn hay không?

Nếu là số chẵn, hãy in ra màn hình: Even number
Nếu không không in ra Odd number.
Ví dụ:
Cho n = 10, kết quả nên in ra như sau: "Even number"
Cho n = 151, Kết quả nên in ra là "Odd number"

-> Dùng if / else bình thường hoặc toán tử 3 ngôi condition ? true : false

## Bài tập 2: hãy viết đoạn mã cung cấp đầu vào cho mức lương của hai người. Nhiệm vụ của bạn là tìm ra người có mức lương cao nhất.

Output: Nếu người thứ nhất có mức lương cao nhất, chương trình sẽ in ra person1 lên trên màn hình cửa sổ dòng lệnh.
Nếu người thứ 2 có mức lương cao nhất, chương trình sẽ in ra person2 lên trên màn hình cửa sổ dòng lệnh.
-> Dùng if / else bình thường hoặc toán tử 3 ngôi condition ? true : false

## Bài tập 3: viết đoạn mã cung cấp nhập đầu vào là một ký tự. Nhiệm vụ của bạn là tìm xem ký tự đã cho là bảng chữ cái viết hoa, một bảng chữ cái viết thường hay một ký tự không phải là chữ cái.

B1: Khởi tạo biến có tên là character.
B2: Tìm lại phần isalpha, isupper, islower -> Sử dụng if/else if/else
Output: Nếu ký tự là bảng chữ cái viết hoa, chương trình của bạn sẽ in ra "upper-case alphabet".
Nếu ký tự là bảng chữ cái viết thường, chương trình của bạn sẽ in ra "lower-case alphabet".
Nếu ký tự không phải là ký tự chữ cái, chương trình của bạn sẽ in ra "not an alphabet".

## Bài tập 4: Cho phương trình bậc 2: a * x^2 + b *x +c = 0 (a!=0) được nhập lần lượt từ bàn phím. Hãy viết chương trình thực hiện in ra số nghiệm của phương trình trên bằng ngôn ngữ C++. Kết quả hiển thị ra màn hình có các dạng sau:

- Nếu phương trình vô nghiệm (không có nghiệm số thực) in ra màn hình:
  The equation has no solution!
- Nếu phương trình có một nghiệm số thực, in ra màn hình:
  The equation has one real solution!
- Nếu phương trình có 2 nghiệm số thực phân biệt, in ra màn hình:
  The equation has two real solutions!
  B1: Tính delta = b*b - 4 *a *c
  B2: Δ > 0: thì phương trình tồn tại 2 nghiệm thực phân biệt, tương tự Δ = 0 và Δ < 0
  Check cả điều kiện a = 0 thì phương trình có nghiệm gì

## Bài tập 5: Hãy viết chương trình xác định 1 năm year nhập vào từ bàn phím có phải là năm nhuận hay không?

- Nếu năm nhập vào là năm nhuận thì in ra:
  Năm year là năm nhuận!
- Nếu năm nhập vào không phải là năm nhuận thì in ra:
  Năm year không phải là năm nhuận!
- Với year nhập từ bàn phím. Ví dụ:
  Với year = 2000 thì in ra: Năm 2000 là năm nhuận!
  Ngược lại với year=1999 thì in ra: Năm 1999 không phải là năm nhuận!
  Năm nhuận là năm chia hết cho 4, không chia hết cho 100 hoặc chia hết cho 400

## Bài tập 6: Cho 1 số từ 0 đến 6. Viết chương trình để in ra thứ trong tuần

number: 0 => Thứ trong tuần: Sunday

number: 1 => Thứ trong tuần: Monday

number: 2 => Thứ trong tuần: Tuesday

number: 3 => Thứ trong tuần: Wednesday

number: 4 => Thứ trong tuần: Thursday

number: 5 => Thứ trong tuần: Friday

number: 6 => Thứ trong tuần: Saturday

Ví dụ:
Cho number = 0; in ra: Sunday
Cho number = 4; in ra: Thursday
Cho number = 6; in ra: Saturday
Đầu vào: 1 số từ 0 đến 6
Đầu ra: In ra thứ trong tuần
-> Gợi ý: sử dụng switch case

## Bài tập 7:

Cho 2 biến kiểu số nguyên a, b và 1 biến kiểu ký tự c. Cả 3 biến này đều được nhập từ bàn phím. Biết biến c là 1 trong 4
ký tự '+', '-', '*' hoặc '/'. Bạn hãy viết chương trình hiển thị giá trị của biểu thức khi áp dụng phép toán c lên a và
b. Ví dụ nếu bạn nhập a = 7, c = '+', b = 9
Thì màn hình sẽ hiển thị ra: 16
-> Gợi ý: sử dụng switch case

## Bài tập 8:

Viết chương trình nhập vào tháng và hiển thị ra số ngày trong tháng đó. Xét cả trường hợp năm nhuận (tháng 2 có 29 ngày)
-> Gợi ý: sử dụng switch case

## Bài tập 9: Nhập vào 1 số và kiểm tra đấy có phải số nguyên tố hay không

Note: Số nguyên tố là số chỉ chia hết cho 1 và chính nó, số đó không được chia hết số nào khoảng từ 1 đến chính số đó.
Ví dụ: 13 là số nguyên tố, vì nó chỉ chia hết cho 1 và 13, 13 không chia hết số nào trong khoảng số đấy
Các bước làm:
B1: Nhập số nguyên cần kiểm tra từ người dùng.
B2: Kiểm tra xem số đó có nhỏ hơn 2 hay không, vì tất cả các số nguyên tố lớn hơn 1.
B3: Duyệt qua tất cả các số từ 2 đến căn bậc hai của số đó (ví dụ: nếu số là n thì bạn chỉ cần duyệt từ 2 đến căn bậc
hai của n).
B4: Kiểm tra xem số đó có chia hết cho bất kỳ số nào trong khoảng đó hay không. Nếu có, nó không phải là số nguyên tố.
Nếu không, nó là số nguyên tố.
B5: Xuất kết quả cho người dùng.