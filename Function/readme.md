## Bài tập 1: Tính lập phương của một số

Viết chương trình tìm lập phương của một số bằng phương thức.

Tạo phương thức findCube().
Bên trong phương thức, tạo biến number với giá trị 5.
Tìm lập phương của số và gán nó cho biến result.
In biến result.
Gọi phương thức bằng cách sử dụng đối tượng của lớp.
Output: 125

## Bài tập 2: Bài tập đối số phương thức:

Viết chương trình cộng hai số dấu phẩy động sử dụng phương thức.

- Tạo phương thức addNumbers().
- Phương thức nhận hai đối số là n1 và n2.
- Cộng n1 với n2 bên trong phương thức và in kết quả.
  Bên trong main():
- Nhận tham số từ người dùng và lưu trong các biến number1 và number2.
- Tạo một đối tượng của lớp và sử dụng đối tượng đó để gọi hàm addNumbers() với các đối số number1 và number2.
  Input:
  32.5
  16.8
  Output:
  49.3

## Bài tập 3: Viết chương trình tính tích của hai số sử dụng phương thức:

Bước 1. Tạo phương thức:

Tạo phương thức getProduct().
Phương thức nhận hai đối số: number1 và number2.
Nhân number1 với number2 và trả về kết quả.
Bước 2. Bên ngoài phương thức:

Nhận hai số nguyên đầu vào từ người dùng và lưu trong n1 và n2.
Gọi phương thức getProduct() với đối số n1 và n2 tương ứng và lưu giá trị trả về trong biến result.
In result.
Để biết thêm gợi ý, hãy xem phần code.

Input:
5
6
Output:
30

## Bài tập 4: Hãy viết chương trình kiểm tra xem một số là chẵn hay lẻ bằng cách tạo một phương thức.

Trong các chương trình mà kết quả chỉ có thể là một trong hai giá trị, chúng ta thường trả về một giá trị boolean từ phương thức để giải các bài toán đó.

## Bài tập 5: Xây dựng chương trình kiểm tra hai tham số truyền vào phương thức có bằng nhau hay không.

(function boolean - > if /esle)
Tạo phương thức myMethod() nhận hai đầu vào là số nguyên num1 và num2. Trong đó, kiểm tra xem hai tham số bằng nhau hay không, nếu bằng nhau in ra Arguments are Equal, ngược lại in ra Arguments are not Equal.
Trong chương trình chính, nhận hai số nguyên number1 và number2 từ bàn phím. Tạo object và gọi myMethod() với hai tham
số là hai biến vừa nhập
Input:
4
8
Output:
Arguments are not Equal

## Bài tập 6:Xây dựng chương trình tính lãi đơn bằng cách dùng phương thức, với công thức tính lãi đơn là

Simple Interest = (principal _ time _ rate) / 100

Tạo phương thức simpleInterest() với ba tham số lần lượt là principal, time, rate. Trong đó, tính toán theo công thức và trả về kết quả
Trong chương trình chính, nhận đầu vào từ bàn phím các số thực principal, time, rate. Gọi phương thức trên với tham số vừa nhập và in kết quả ra màn hình
Input:
15000
2
15
Output:
4500.0

## Bài tập 7: Đảo ngược một số

Xây dựng chương trình đảo ngược một số sử dụng phương thức

Tạo phương thức findReverse() nhận vào tham số là số nguyên number. Trong đó, tìm số đảo ngược của number và trả về kết quả
Trong chương trình chính, nhận một số nguyên từ bàn phím và tìm số đảo ngược của nó, sau đó in ra màn hình.
Input:
143
Output:
341
--

## Bài tập 8: Nhập 1 số n và tính tổng giai thừa của số đấy.

Ví dụ: 5! = 120 -> Tổng là 1 + 2 + 0 = 3.
Gợi ý: Viết 1 function tính giai thừa 1 số và 1 function để tính tổng các chữ số đó
function sum + function factorial -> Gọi 2 hàm

## Bài tập 9: Hiển thị 20 số nguyên tố đầu tiên

Gợi ý: Viết 1 function kiểm tra nó có là số nguyên tố hay không (boolean) và kết hợp while(count < 20) sau đó dùng if (nếu function thỏa mãn điều kiện) -> Hiển thị
B1: Tạo một hàm kiểm tra số nguyên tố:

- Nhận một số nguyên dương n
- Duyệt từ 2 đến căn bậc hai của n:
- Nếu n chia hết cho bất kỳ số nào trong khoảng này, trả về false
- Nếu không có số nào chia hết, trả về true
  B2: Tạo biến đếm và đặt giá trị ban đầu là 0
  Sử dụng vòng lặp while và kiểm tra điều kiện (số lượng số nguyên tố đã tìm thấy < 20):
  - Kiểm tra nếu số hiện tại là số nguyên tố bằng cách sử dụng hàm kiểm tra
  - Nếu là số nguyên tố, tăng giá trị đếm và hiển thị số đó

## Bài tập 9.2: Tổng 10 số nguyên tố đầu tiên

B1: Tạo một hàm kiểm tra số nguyên tố:

- Nhận một số nguyên dương n
- Duyệt từ 2 đến căn bậc hai của n:
- Nếu n chia hết cho bất kỳ số nào trong khoảng này, trả về false
- Nếu không có số nào chia hết, trả về true

B2: Tạo biến tổng và đặt giá trị ban đầu là 0
Tạo biến đếm và đặt giá trị ban đầu là 0
Sử dụng vòng lặp while và kiểm tra điều kiện (số lượng số nguyên tố đã tìm thấy < 10):

- Kiểm tra nếu số hiện tại là số nguyên tố bằng cách sử dụng hàm kiểm tra
- Nếu là số nguyên tố, cộng giá trị đó vào biến tổng và tăng giá trị đếm
  In ra tổng của 10 số nguyên tố đầu tiên

## Bài tập 10: Hiển thị số nguyên dương nhỏ nhất chia hết cho 3, 5 và 7

B1: Tạo một hàm kiểm tra số:

- Nhận một số nguyên dương n
- Trả về true nếu n chia hết cho 3, 5 và 7, ngược lại trả về false

B2: Tạo một biến number và đặt giá trị ban đầu là 1
Sử dụng vòng lặp while và kiểm tra điều kiện hàm kiểm tra số với số hiện tại (number):

- Nếu số hiện tại không thỏa mãn điều kiện, tăng giá trị number lên 1 và tiếp tục vòng lặp
- Nếu số hiện tại thỏa mãn điều kiện, in ra số đó và kết thúc chương trình bằng lệnh break

## Bài tập 11: Viết function tính ước chung lớn nhất và phân tích ước chung ra số nguyên tố và hiển thị số nguyên tố lớn nhất đó

Ví dụ: UCLN của 48 và 60 là 12 vì 48 % 12 == 0 và 60 % 12 == 0
Phân tích 12 ra nguyên tố: 12 = 2 _ 2 _ 3 -> In ra 3

**Bước 1: Tính UCLN của hai số**

_Bước 1.1: Tạo hàm để tính UCLN_

- Đặt tên hàm là **`findGCD`**.
- Sử dụng một vòng lặp for từ 1 đến giá trị nhỏ nhất của _a_ và _b_.
- Trong mỗi lần lặp, kiểm tra xem _i_ có phải là ước chung của cả _a_ và _b_ hay không bằng cách kiểm tra _a_%_i_==0 và _b_%_i_==0.
- Nếu điều kiện trên đúng, gán giá trị của _i_ cho biến _gcd_.
- Cuối cùng, giá trị của _gcd_ sẽ là UCLN của _a_ và _b_.

**Bước 2: Kiểm tra số nguyên tố**

_Bước 2.1: Tạo hàm để kiểm tra số nguyên tố_

- Đặt tên hàm là **`isPrime`**.
- Sử dụng một vòng lặp để kiểm tra từ 2 đến căn bậc hai của số đang xét.
- Nếu số đang xét chia hết cho bất kỳ số nào trong khoảng đó, thì nó không phải là số nguyên tố.
- Nếu không có số nào chia hết, thì số đó là số nguyên tố.

**Bước 3: Sử dụng hàm findGCD để tính UCLN và phân tích thành số nguyên tố**

- Gọi hàm **`findGCD`** với hai số cần tính UCLN.
- Nhận giá trị UCLN và gán cho một biến, ví dụ: _gcd_.
- Dùng vòng lặp để phân tích _gcd_ thành các số nguyên tố.
- Kiểm tra từ 2 đến _gcd_ xem có phải là số nguyên tố hay không bằng cách sử dụng hàm **`isPrime`**.
- Nếu là số nguyên tố, in ra màn hình.
