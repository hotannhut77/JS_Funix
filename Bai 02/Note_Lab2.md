# Lab 2

## Lab 2.1. Các kiểu dữ liệu (10 phút)

Ở bài Lab này, bạn sẽ tiếp tục sử dụng các đoạn code từ bài Lab 1: Giá trị và biến.

1. Khai báo một biến có tên 'isIsland', và đặt giá trị của biến theo quốc gia của bạn. Biến phải chứa một giá trị Boolean (nếu quốc gia là một hòn đảo thì giá trị biến này là true, ngược lại sẽ là false). Khai báo thêm một biến 'language' nhưng chưa cần gán cho nó bất kỳ giá trị nào.

2. In các kiểu dữ liệu của biến 'isIsland', 'population', 'country' và 'language' ra console.

==> Bài này giống bài Lab 1, chưa có gì khó khăn cả.

```
const isIsland = false;
let language;
// vì sao dùng const và let lúc  ??
```

## Lab 2.2. Let, const và var (15 phút)

1. Đặt giá trị của 'language' thành ngôn ngữ được nói ở nơi bạn sống (một số quốc gia có nhiều ngôn ngữ, nhưng chỉ cần chọn một). Ví dụ như 'English', 'Vietnamese'.

2. Hãy nghĩ xem những biến nào có thể sử dụng const (những giá trị nào không bao giờ thay đổi, và những giá trị nào có thể thay đổi?). Sau đó, chuyển các biến mà bạn đã nghĩ ra thành biến khai báo bằng const.

3. Giờ hãy thử thay đổi giá trị một trong các biến trên và quan sát xem điều gì sẽ xảy ra.

==> Bài này cũng đơn giản, chủ yếu kiểm tra xem chúng ta có hiểu cơ chế hoạt động của từ khóa let và const hay không ?
Và khi nào khai báo với let, khi nào khai báo với const

## Lab 2.3. Các toán tử cơ bản (25 phút)

1. Nếu quốc gia của bạn bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia, vậy sẽ có bao nhiêu người sống ở mỗi miền? Hãy sử dụng giá trị từ biến population để hoàn thành yêu cầu này, in ra màn hình console giá trị của population chia 2.
   ==> chỉ cần in ra giá trị population / 2
2. Tăng giá trị của biến population thêm 1 và in kết quả ra console.
   ==> dùng population ++ hoặc population = population +1 ;
3. Phần Lan có dân số là 6 triệu người. Kiểm tra xem quốc gia bạn có nhiều dân hơn so với Phần Lan không? Bạn cần in ra console xem giá trị population có lớn hơn 6 triệu không?
   ==> dùng toán tử so sánh
4. Dân số trung bình của một quốc gia là 33 triệu người. Kiểm tra xem quốc gia bạn có ít dân hơn so với các mức dân số trung bình không?
   ==> Dùng toán tử so sánh
5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là 'description', trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'. Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.
   ==> dùng phép nối chuổi

Lab 2.4. String và Template Literal (5 phút)

1. Tạo lại biến 'description' từ lần gán trước, lần này hãy sử dụng cú pháp template literal.

VD:

```
const country = "VIỆT NAM";
let population = 97;
const language = "Tiếng Việt";

let description = `${country} and its ${population} million people speak ${language}`;
console.log(description);

```

## Lab 2.5. Đưa ra quyết định: Câu lệnh if/else (10 phút)

1. Nếu dân số của nước bạn có hơn 33 triệu người, hãy in string sau ra console: '<country>'s population is above average'. Nếu không hãy in ra một string như thế này: '<country>'s population is < 33 - population > million below average' . Ví dụ dân số của Hà Lan là 18 triệu người, bạn sẽ cần in ra "Nederland's population is 15 million below average" (15 là lấy 33 - 18).
   ==> Dùng if else + template string.
2. Sau khi kiểm tra kết quả, thay đổi giá trị biến population tạm thời thành 13, sau đó thành 130. Quan sát các kết quả khác nhau và đặt giá trị trở lại ban đầu.
   ==> test các giá trị khác nhau để biết được cách hoạt động của câu lệnh if else

## Lab 2.6.1. So sánh chỉ số IBM (phần 1)

Mark và John đang cố so sánh chỉ số BMI (Body Mass Index) của họ, được tính bằng công thức: BMI = mass/[(height)^2)] = mass/(height\*height) (mass tính bằng kg và height tính bằng mét).

1. Nhiệm vụ của bạn:

Lưu khối lượng và chiều cao của Mark và John vào các biến.
Tính chỉ số BMI của John và Mark theo công thức (bạn có thể tính cả hai).
Tạo biến Boolean 'markHigherBMI' chứa thông tin về việc liệu chỉ số BMI của Mark có cao hơn BMI của John không. 2. Dữ liệu kiểm tra:

Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.

VD:

```
let markMass = 78,
  markHeight = 1.69;
let johnMass = 92,
  johnHeight = 1.95;
let markHigherBMI;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      1
    )}) is higher than John's (${johnBMI.toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      1
    )}) is higher than Mark's (${markBMI.toFixed(1)})!`
  );
}
```

## Lab 2.6.2. So sánh chỉ số IBM (phần 2)

Sử dụng ví dụ về BMI từ Lab 2.6.1 và code bạn đã viết để cải thiện lại.

1. Nhiệm vụ của bạn:

In một output tốt ra console, hiển thị ai có chỉ số BMI cao hơn. Thông báo hiển thị sẽ là "Mark's BMI is higher than John's!" hoặc "John's BMI is higher than Mark's!".
Sử dụng template literal bao gồm các giá trị BMI trong output. Ví dụ: "Mark's BMI (28.3) is higher than John's (23.9)!”.

==> tương tự thôi
