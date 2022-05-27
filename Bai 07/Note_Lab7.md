# Lab 7 : Project đoán số

Trong bài lab này, chúng ta hãy cùng nhau viết lại toàn bộ phần code cho project đoán số thông qua nội dung bài học ở các video từ 70 => 75 và 77.

## I. Mô tả hoạt động các tính năng cần có của bài lab 7 này !

Chức năng chính của game này là : người dùng nhập vào 1 số, sau đó kiểm tra số đó có trùng với `con số bí ẩn` (con số bí ẩn này sẽ là con số mà ta random ngẫu nhiên có giá trị từ 1 đến 20 bất kỳ) hay không ? Nếu trùng thì thông báo chiến thắng và hiển thị điểm đạt được. Nếu không trùng thì có thể đưa ra gợi ý là số của chúng ta nhập vào là cao hơn hay thấp hơn con số `bí ẩn` , và cứ mỗi lần đoán sai như thế thì điểm có thể đạt được sẽ giảm dần (mỗi lần ấn check sẽ giảm đi 1 điểm). Nếu điểm về 0 mà chưa đoán đúng thì thông báo thua cuộc !

## II. Ý tưởng:

Ta cần chia nhỏ ứng dụng ra thành những vấn đề nhỏ :

Đặt câu hỏi ?

- Làm sao để random 1 số ngẫu nhiên từ 1 đến 20
- Làm sao để lấy giá trị người dùng nhập vào để so sánh với con số bí ẩn
- Khi ấn vào nút `check` thì cần thực hiện những công việc gì ?
- Cách chọn được các phần tử mong muốn để ta cập nhật các giá trị hiển thị cho nó (Dùng DOM như thế nào cho phù hợp ?)

1. Dùng hàm `Math.random` để radom 1 số thập phân bất kỳ từ 0 đến 1 :

`Math.random` là 1 hàm có chức năng ramdom 1 số ngẫu nhiên (số thập phân) từ 0 đến nhỏ hơn 1 bất kỳ

VD:

```
// random thử 10 số bất kỳ dùng hàm Math.random
for(let i = 1;i <= 10;i ++ ) {
    console.log(Math.random());
}
```

==> Vậy làm thế nào để random 1 số nguyên bất kỳ từ 1 đến 20 ???

- Random 1 số (thập phân) bất kỳ từ 1 đến 20 : `Math.random() * 20 + 1`
- Sau đó ép kiểu hoặc lấy phần nguyên là ta sẽ có số nguyên
  Dùng `Math.trunc()` để lấy phần nguyên của 1 số thập phân hoặc ép kiểu bằng `parseInt`

2. Lấy giá trị nhập vào bằng thuộc tính .value

==> Lưu ý là nên ép kiểu thủ công ở đây , ép về kiểu số nguyên --> để kiểm tra cả trường hợp nhập vào không phải là số thì còn thông báo `No number!`

3. Khi ấn nút `check` thì ta sẽ tiến hành làm những việc gì :

- Lấy giá trị nhập vào , ép kiểu
- Kiểm tra nếu nhập vào không phải số thì thông báo : `⛔️ No number!`
- Tiến hành so sánh con số nhập vào với số bí ẩn
  ==> TH1: Nếu trùng :
  Thì tiến hành :
  a. Hiển thị thông báo chiến thắng
  b. thay đổi 1 số thuộc tính cần thiết như thay đổi màu nề, hiển thị con số bí ẩn ra ,..
  c. Cập nhật lại điểm cao nhất
  ==> TH2: Nếu không trùng :
  a. Đầu tiên là giảm điểm số đi 1 đơn vị
  b. Kiểm tra xem điểm số đã về 0 chưa
  c. Nếu chưa về 0 thì kiểm tra xem con số nhập vào là lớn hơn hay nhỏ hơn so với số bí ẩn để đưa ra thông báo tương ứng
  d. Còn nếu đã về 0 thì thông báo thua cuộc
