# BÀI 4 : HÀM VÀ MẢNG

- Hàm (function) là 1 thuật ngữ chỉ một nhóm các câu lệnh được đặt tên để chương trình có thể gọi bất cứ lúc nào. Hàm là khái niệm cực kỳ quan trọng trong trong JS nói riêng và trong lập trình nói riêng. ==> Khả năng quan trọng nhất của hàm là giúp cho chúng ta có thể tránh việc lặp lại code, và viết code ngắn gọn dể dàng, dể sử lý hay sữa đổi nâng cấp chương trình hơn.

- Array (mảng) là một loại dữ liệu dạng tập hợp nhiều phần tử, trong đó mỗi phần tử sẽ được được đánh vị trí bằng chỉ mục. Chúng ta thường sử dụng mảng để lưu trữ dữ liệu dạng danh sách, ví dụ như lưu trữ danh sách tên các sinh viên trong 1 lớp chẳng hạn, thì mỗi phần tử sẽ là tên của một thành viên trong lớp.

Trong bài học này, chúng ta sẽ tìm hiểu CƠ BẢN về :

- Hàm trong JS: định nghĩa, khai báo và sử dụng hàm.
- Mảng : khai báo, các phép toán cơ bản và ứng dụng.

## I. Strict Mode :

- Strict Mode là một chế độ đặc biệt (chế độ nghiêm ngặt, từ ES5) mà chúng ta có thể kích hoạt trong JS để việc viết code dễ dàng và an toàn hơn, tránh các sai sót tình cờ

==> Sử dụng 'use strict' ở đầu file code để kích hoạt

Vậy ý nghĩa của việc sử dụng Strict mode để làm gì, vì sao nên sử dụng strict mode ???

==> Lý do lớn nhất là giúp chúng ta có thể tránh các sai sót trong khi code:

- Vì strict mode sẽ hiển thị các lỗi mà JS âm thầm bỏ qua, để thông báo đến chúng ta biết , nhận ra và khắc phục chúng

- Ví dụ như : gán giá trị cho 1 biến chưa được khai báo , hay trong trường hợp từ khóa 'this' sẽ có ý nghĩa khác nhau ở chế độ thương thường và chế độ strict mode,...

VD:

```
// "use strict";

let count = 0;
cout = 10;
count++;
console.log(count);
```

## II. Hàm (function) :

### 1. Định nghĩa hàm :

- Hàm về cơ bản là đoạn cde mà chúng ta có thể sử dụng lặp đi lặp lại trong code bằng việc gọi hàm , chúng sẽ có chức năng là thực hiện một hoặc nhiều hành động nào đó.

- Hàm khá giống biến nhưng: biến chứ giá trị còn hàm chứa 1 đoạn code (tức là 1 hoặc nhiều dòng code hoàn chỉnh). Hiểu nôm na là hàm như 1 hợp chứa các dòng code, mà khi chúng ta cần những dòng code đó để thực hiện các tác vị gì đó ta không cần viết lại các dòng code mà chỉ cần gọi đến hàm để lấy các dòng code đó và JS sẽ thực thi code trong cái hợp đó.

VD : chúng ta có 1 tác vụ là tính toán tuổi , so sánh với tuổi với 18 và cho biết bạn đó có trên 18 tuổi chưa chẳng hạn . Chúng ta thực hiện tác vụ này trên 100 người ==> Vậy chúng ta sẽ code thế nào ???

```
const birthYear1 = 2000;
const birthYear2 = 2005;
const birthYear3 = 1998;
const birthYear4 = 2008;

const age1 = 2022 - birthYear1;
if (age1 >= 18) {
  console.log(`Bạn đã ${age1} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age1} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

const age2 = 2022 - birthYear2;
if (age2 >= 18) {
  console.log(`Bạn đã ${age2} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age2} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

const age3 = 2022 - birthYear3;
if (age3 >= 18) {
  console.log(`Bạn đã ${age3} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age3} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

const age4 = 2022 - birthYear4;
if (age4 >= 18) {
  console.log(`Bạn đã ${age4} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age4} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

// // Còn cách khác là chúng ta dùng hàm để viết code gọn hơn, linh động
// // và dể chỉnh sữa code
// // khai báo hàm
// function showAge(birthYear) {
//   const age = 2022 - birthYear;
//   if (age >= 18) {
//     console.log(`Bạn đã ${age} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
//   } else {
//     console.log(`Bạn đã ${age} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
//   }
// }

// // gọi hàm
// showAge(birthYear1);
// showAge(birthYear2);
// showAge(birthYear3);
// showAge(birthYear4);

```

==> Hàm có 3 dạng :

- Khai báo hàm
- Biểu thức hàm
- Hàm mũi tên

### 2. Các tính chất cơ bản cần biết về hàm :

==> Tóm gọn 1 số tính chất căn bản cần nắm rõ :

- Hàm <b>KHÔNG</b> được thực thi khi định nghĩa.
- Hàm <b>chỉ được thực thi khi được gọi</b>
- Hàm <b>có thể</b> nhận vào tham số (0 tham số, 1 tham số, 2 tham số,... n tham số )
- Hàm <b>có thể</b> trả về 1 giá trị (return)

### 2.1. Nói trước về khai báo hàm :

Khai báo hàm gồm có : từ khóa function , tên hàm, tham số truyền vào (có thể có hoặc không), và phần thân hàm

Lưu ý về đặt lên hàm :

- cũng giống như đặt tên biến đã giới thiệu trước đây, ta chỉ có thể sử dụng : a-z, A-z, 0-9, $, \_ để đặt tên hàm .

- với các số 0 đến 9 thì không dược viết ở đầu tên hàm --> sẽ báo lỗi ngay . Ngoài ra nên đặt tên hàm theo dạng camelCase và tên hàm nên mô tả đúng với chức năng mà hàm sẽ làm để dể đọc dể hiểu code.

- Cú pháp khai báo hàm :

```
function <tên hàm> ([các tham số]) {
	// thân hàm
	// là các dòng code để thực hiện chức năng nào đó do ta định nghĩa
}

```

Ví dụ về khai báo hàm :

```

// không có tham số
function loiChao() {
  console.log("Xin chào các bạn, mình là HTN !");
}

// gọi hàm
loiChao();

// có tham số
function getSum(a, b) {
  console.log(`Tổng của 2 số ${a} và ${b} là : ${a + b}`);
}

// gọi hàm
getSum(99, 100);
```

#### 2.2. Tham số :

- Các tham số / đối số đầu vào cho hàm : đóng vai trò như các biến có phạm vi sử dụng trong hàm

==> Khả năng tái sử dụng và tính linh hoạt được thể hiện qua việc sử dụng các tham số đầu vào này , với những tham số khác nhau ta sẽ có những kết quả khác nhau

VD :

```

function getSum(a, b) {
  console.log(`Tổng của 2 số ${a} và ${b} là : ${a + b}`);
}

const num1 = 20;
const num2 = 30;

getSum(num1, num2);
console.log(a, b); // báo lỗi tại dòng này
// vì lúc này a, b là các biến chỉ được nhìn thấy,
// và sử dụng được bên trong hàm getSum mà thôi
```

==> lưu ý hàm có thể có hoặc không có tham số

#### 2.3. Return

- Câu lệnh `return` trong hàm :
  Ta sử dụng return để trả về giá trị cho 1 hàm.
  Ví dụ : Ta cần thực hiện 1 chức năng là tính tuổi của 1 người nào đó với tham số đưa vào là năm sinh của họ . Thì ta sẽ thực hiện tính toán gì đó bên trong hàm để có được số tuổi, sau đó dùng return để trả về số tuổi ấy.

VD :

```
const birthYear = 2000;

function getAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

const age = getAge(birthYear);
console.log("số tuổi là : " + age);
```

==> Lưu ý là hàm có thể có hoặc không có return
--> Hàm không có trả về return --> thì sẽ trả về undefined

### 3. Biểu thức hàm và hàm mũi tên :

#### 3.1 Biểu thức hàm :

- Biểu thức hàm cũng khá giống khai báo hàm, chúng chỉ khác nhau ở chổ : biểu thức hàm không có tên hàm và nó được gán cho 1 biến , và có thể coi biến đó lúc này chính là tên hàm

```

const showInfo = function (fullName, age) {
  console.log(`Tôi tên là ${fullName}, năm nay tôi ${age} tuổi !`);
};

showInfo("Nguyễn Tiến Linh", 25);
```

- Lưu ý là : biểu thức hàm và khai báo hàm còn khác nhau 1 ở 1 điểm quan trọng nữa là : Với khai báo hàm thì ta có thể gọi hàm trước khi chúng ta định nghĩa. Còn với biểu thức hàm thì không cho phép điều đó . ==> điều này liên quan đến quá trình hoisting (sẽ tìm hiểu ở các bài sau)

#### 3.2. Hàm mũi tên (arrow function)

- Arrow function hay hàm mũi tên là 1 BIỂU THỨC HÀM nhưng được viết gọn hơn với dấu ( => )

VD :

```

const showInfo = (fullName, age) =>
  console.log(`Tôi tên là ${fullName}, năm nay tôi ${age} tuổi !`);

showInfo("Nguyễn Tiến Linh", 25);
```

- Ưu điểm : hàm mũi tên có cú pháp ngắn gọn, thường được sử dụng khi muốn viết 1 hàm trên 1 dòng .

- Lưu ý :
  --> Vì hàm mũi tên như đã nói cũng là biểu thức hàm nên nó cũng không cho phép gọi trước khi định nghĩa.

  --> Ngoài ra hàm mũi tên còn khác với biểu thức hàm và khai báo hàm về một số khía cạnh khác ví dụ : đối với từ khóa this (hàm mũi tên không có this của riêng nó ) ==> chúng ta sẽ hiểu rõ hơn vấn đề này ở các bài sau

### 4. Hàm trong hàm

Việt sử dụng hàm trong hàm . về cơ bản ta cứ hiểu như việc chúng ta gọi hàm thông thường như trước giờ, và mục đính của việc này là để tái sử dụng code một cách hiệu quả, để dể dàng chỉnh sửa và bổ sung sau này

VD :

```

const luyThua2 = (a) => a ** 2;
const display = function (num) {
  const res = luyThua2(num);
  console.log(res);
};

display(10);
```

### 5. Tổng kết về hàm :

Cần nắm các kiến thức sau về hàm :

a. Các tính chất cơ bản nhất :

- Hàm <b>KHÔNG</b> được thực thi khi định nghĩa.
- Hàm <b>chỉ được thực thi khi được gọi</b>
- Hàm <b>có thể</b> nhận vào tham số (0 tham số, 1 tham số, 2 tham số,... n tham số )
- Hàm <b>có thể</b> trả về 1 giá trị (return)

b. Có 3 loại hàm :

- Khai báo hàm
- Biểu thức hàm
- Hàm mũi tên

==> Và hàm cũng giống biến chúng ta có thể sử dụng (gọi hàm, thậm chí định nghĩa 1 hàm ) ở bất cứ đâu , nhưng vấn đề này còn liên quan đến scope (phạm vi) --> sẽ được tìm hiểu sau.

## III. Array (mảng):

Tìm hiểu các kiến thức cơ bản về mảng trong JS

- Thế nào là mảng ?
- Cách tạo mảng
- Cách truy xuất các phần tử của mảng , độ dài của mnagr
- Và một số phương thức cơ bản của mảng

### 1. Giới thiệu về array

- Array là 1 cấu trúc dữ liệu quan trọng trong JS nói riêng và trong lập trình nói chung, array cho phép chúng ta lưu trữ các giá trị khác nhau vào trong 1 biến duy nhất
- Và lưu ý : array không phải là kiểu nguyên thủy , mà nó là 1 dạng kiểu dữ liệu đối tượng (object).

Vì sao phải cần đến mảng : Ví dụ ta cần quản lý thông tin của sinh viên, như tên sinh viên chẳn hạn, để lưu trữ các tên sinh viên đó, (ta sẽ khai bán n biến để chứa giá trị tên sinh viên ??? --> Quá dài, quá phức tạp )==> do đó ta dùng mảng chỉ cần 1 biến có thể lưu trữ được tất cả các tên đó .

```
const names = ["Nam", "Nhựt", "Ngân", "Bình", "Thái", "Tiến"];

```

==> Có 2 cách khai báo mảng :
VD :

- const array = [item 1, item 2]
- const array = new Array(item1, item2)

==> Truy cập 1 phần tử trong array theo chỉ mục
<img src = "https://freetuts.net/upload/tut_post/images/2015/01/12/288/mang-trong-js.png">
Lưu ý : mảng có n phần tử thì các phần tử được đánh chỉ số từ 0 , 1 , 2... đến n-1
Do đó, để truy cập phần tử thứ k --> ta gọi array[k-1];

VD :

```
const numbers = [20, 30, 40, 50, 60];
console.log(numbers);
console.log(numbers[0]);
```

==> Lưu ý trong trường hợp khai báo mảng với const
Khi kháo mảng với từ khóa const (hằng) --> thì sẽ hiểu như thế nào ???

- Các phần tử trong mảng không được thay đổi vì nó là khai báo hằng ??? ==> NO, không phải thế !
- Ta có thể thay đổi giá trị của các phần tử trong mảng , nhưng không thể thay đổi (gán cho biến mảng 1 giá trị mới) ==> Ta sẽ hiểu rõ chi tiết vì sao ở các bài sau !

```

const numbers = [20, 30, 40, 50, 60];
console.log(numbers);
console.log(numbers[0]);

const lengthArr = numbers.length;
console.log(lengthArr);

// numbers = ["HTN", 30, 40, 50, 60];// báo lỗi ngay
numbers[0] = "HTN";
console.log(numbers);
```

### 2. Các phương thức cơ bản của array

- Phương thức `push`
  Để thêm MỘT HOẶC NHIỀU phần tử vào cuối mảng và return về độ dài mới của array
  vd:

```

const myArray = ["Hello", 10, 20, "JS", 12.34];
console.log(myArray);
console.log(myArray.length);

// tiến hành thêm 2 phần tử mới vào
// cuối mảng và trả về độ dài mới của mảng
let newLength = myArray.push("ok", 100);
console.log(myArray);
console.log(newLength);
```

- Phương thức `unshift`
  Để thêm 1 hoặc nhiều phần tử vào đầu của mảng và trả về độ dài mới của mảng

- Phương thức `pop`
  Để xóa bỏ 1 phần tử ở đuôi mảng và trả về phần tử bị xóa ấy

- Phương thức `shift`
  Để xóa bỏ 1 phần tử ở đầu mảng và trả về phần tử bin xóa đi ấy

- Phương thức `indexof`
  Trả về vị trí của 1 phần tử trong array, nếu không có phần tử đó trong array thì sẽ return -1

- Phương thứ `includes`
  Trả về true / false : true nếu mảng có chứa phần tử , ngược lại không chứa thì trả về false

- Phương thức `splice` (quan trọng):
  Dùng để thay thế, xóa các phần tử trong 1 mảng
  Và trả về mảng các phần tử đã xóa

  ## Tổng kết bài học

  Trong bài học này (bài học rất quan trọng !!!!) , chúng ta cần cần nắm chắc các kiến thức sau :

  ### 1. Hàm :

  - Hàm là gì ?
  - Các tính chất cơ bản của hàm
  - Có các cách nào để khai báo định nghĩa hàm
  - Sử dụng hàm như thế nào --> dùng toán tử gọi hàm ()
  - Hiểu về tham số
  - Hiểu về return

  ### 2. Array :

  - Array là gì ?
  - Vì sao phải sử dụng array ?
  - Cách khai báo array như thế nào ?
  - Một số phương thức cơ bản của array hay sử dụng ,
  - Ngoài ra có thể tham khảo thêm về các phương thức của array trên MDN :
    link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
