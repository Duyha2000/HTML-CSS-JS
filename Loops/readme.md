# Dùng vòng lặp for && while

## Bài tập 1:

Bạn hãy viết chương trình nhập vào bàn phím số nguyên n và hiển thị ra các số chẵn từ n tới 100.
Ví dụ nếu nhập n = 90 thì chương trình sẽ hiển thị ra màn hình: 90 92 94 96 98 100

## Bài tập 2: Nhập 1 số Tính giai thừa của một số:

Ví dụ: 5! = 5 _ 4 _ 3 _ 2 _ 1 -> 120

## Bài tập 3:

Bạn hãy viết chương trình nhập từ bàn phím hai số nguyên a và b. Sau đó hiển thị ra màn hình các số từ a tới b mà chia
hết cho cả 3 và 5.
Ví dụ nếu nhập a = 1, b = 50 thì chương trình sẽ hiển thị ra màn hình: 15 30 45

## Bài tập 4: Nhập 1 số nguyên và tính tổng các số đó

Ví dụ: 3243 -> Tổng = 3 + 2 + 4 + 3

## Bài tap 4.1 (nang cao): Nhập 1 số nguyên n>0 -> viết số nghịch đảo của nó

3248 = 3 _ 10^3 + 2 _ 10^2 + 4 * 10^1 + 8 *10^0
8423 = 8 _ 10^3 + 4 _ 10^2 + 2 * 10^1 + 8 *10^0

-> Dem so chu so cua n?
let count = 0
110 / 10 == 11
count++;

11 / 10 = 1
count++

1/10 = 0
count++
-> count = 3
let sum = 0
for(let i = count - 1; i >=0; i--){
sum += (n %10) \* Math.pow(10,i);
}
sum = ???
Ví dụ: 3248 -> Nghịch đảo: 8423

## Bài tập 5: Chúng ta sẽ phát triển một ứng dụng nhiều chức năng cho phép người dùng chọn chức năng để sử dụng.

Menu gồm :

- Kiểm tra tính chẵn lẻ của 1 số.
- Kiểm tra số nguyên tố.
- Kiểm tra một số có chia hết cho 3 không.
- Thoát
  Gợi ý các bước thực hiện:
  Bước 1: Khai báo biến choice để ghi nhớ lựa chọn của người dùng.

Bước 2: Sử dụng vòng lặp while để hiển thị menu như yêu cầu và cho phép người dùng nhập lựa chọn của họ.

Bước 3: Sử dụng cấu trúc điều kiện switch … case để xét giá trị người dùng nhập vào và điều hướng đến chức năng tương
ứng . Nếu người dùng nhập không hợp lệ thì thông báo nhập sai và yêu cầu nhập lại.

## Bài tập 6: Trong phần này, chúng ta sẽ phát triển một ứng dụng tính chu vi và diện tích theo từng loại hình dựa trên menu chức năng.

Menu gồm :

- Tính chu vi và diện tích hình chữ nhật .
- Tính chu vi và diện tích hình tam giác
- Tính chu vi và diện tích hình tròn.
- Thoát

Gợi ý các bước thực hiện:

Bước 1: Khai báo biến choice để ghi nhớ lựa chọn của người dùng.

Bước 2: Sử dụng vòng lặp while để hiển thị menu như yêu cầu và cho phép người dùng nhập lựa chọn của họ.

Bước 3: Sử dụng cấu trúc điều kiện switch … case để xét giá trị người dùng nhập vào và điều hướng đến chức năng tương
ứng . Nếu người dùng nhập không hợp lệ thì thông báo nhập sai và yêu cầu nhập lại.

## Bài tập 7: Nhập từ bàn phím số nguyên n và hiển thị ra màn hình số các ước số của n.

Ví dụ nếu nhập n = 12 thì chương trình sẽ hiển thị ra màn hình: 6
Giải thích: 12 có 6 ước là 1, 2, 3, 4, 6, 12

## Bài tập 8: nhập từ bàn phím hai số nguyên dương a và b. Sau đó hiển thị ra màn hình kết quả của a^b.

Ví dụ nếu nhập a = 2, b = 3 thì chương trình sẽ hiển thị ra màn hình: 8
Giải thích: 2 _ 2 _ 2 = 8.
