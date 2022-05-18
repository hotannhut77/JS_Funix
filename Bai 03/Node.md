# Bài 3 - Boolean và câu lệnh có điều kiện

## I. Chuyển đổi kiểu và ép kiểu <Khá quan trọng>

- Chuyển đổi kiểu là : chuyển đổi kiểu dữ liệu 1 cách thủ công từ kiểu này sang kiểu khác
- Ép kiểu là : JS sẽ tự động chuyển đổi kiểu 1 cách tự động (ngầm) cho dữ liệu trong 1 số trường hợp nào đó

### 1. Chuyển đổi kiểu từ String sang Number

==> Dùng hàm Number(valueString) để chuyển từ string sang số

VD:

```
const valueString = "1998"

const valueNumber = Number(valueString) // 1998
```

==> LƯU Ý : nếu chuyển đổi 1 chuổi string k phải số sang number thì sẽ trả về NaN (Not a Number)
--> sẽ đụng đến nó , nếu muốn kiểm tra xem người dùng có nhập đúng dạnh sạng 1 số trong 1 form nhập input hay không chẳn hạn !

### 2. Chuyển từ Number sang String :

==> Sử dụng hàm String(valueNumber) để chuyển kiểu từ số sang String. Ví dụ:

```
const valueNumber = 1998

const valueString = String(valueNumber) // "1998"
```

LƯU Ý :

- Javascript chỉ có thể chuyển đổi thành ba kiểu: number, string, boolean

- Không thể chuyển đổi thành underfined hoặc null

- Về ép kiểu dạng boolean ==> sẽ khác xíu --> trình bày sau

### 3. Ép kiểu :

==> Ép kiểu xảy ra khi nào ?

- Như đã biết, ép kiểu diễn ra ngầm , và nó sẽ diễn ra khi xử lý 2 giá trị có kiểu dữ liệu khác nhau
- JS chuyển đổi kiểu để có các giá trị có thể khớp với nhau ==> để có thể thực hiện được các phép tính

#### 3.1 Tự động chuyển từ string sang number :

==> String được ép kiểu thành số trong phép toán trừ , nhân , chia,... những phép toán bắt buộc phải dùng số

VD:

```
let res;
res = "4" - "2";
console.log(res); // 2
res = "4" - 2;
console.log(res); // 2
res = "4" * 2;
console.log(res); // 8
res = "4" / 2;
console.log(res); // 2

// Không phải số NaN
res = "hello" - "world";
console.log(res); // NaN
res = "4" - "hello";
console.log(res); // NaN

// boolead ==> Number
// true : 1
// false : 0

res = "4" - true;
console.log(res); // 3
res = 4 + true;
console.log(res); // 5
res = 4 + false;
console.log(res); // 4

// Null sang number
// null ==> 0
result = 4 + null;
console.log(result); // 4

// undefined sang number
// undefined ==> NaN
result = 4 + undefined;
console.log(result); // NaN

```

#### 3.2 Tự động chuyển từ number sang string :

==> Với các phép toán cộng chuỗi hoặc template string tồn tại chuỗi và một số thì số sẽ được chuyển đổi thành string

VD:

```
let res;
res = "10" + 2;
console.log(res); // "102"
res = "10" + true;
console.log(res); // "10true"
res = "10" + undefined;
console.log(res); // "10undefined"
res = "10" + null;
console.log(res); // "10null"

```

## II. Giá trị Truthy/Falsy <đơn giản nhưng cần nắm rõ>

--> đôi lúc code sẽ có 1 số lỗi liên quan đến phần này nên phải biết vì sao ??

### 1. Gía trị Falsy vs Truthy :

- Có 6 giá trị được coi là false : 0, undefined, null, NaN, " (empty string) và false
  ==> Tức là khi ép kiểu về, sẽ có giá trị là false , hay khi trong điều kiện if, hoặc dùng toán tử logic cũng sẽ được JS
  tự động ép kiểu về dạng boolead và có giá trị là false

  VD:

```
let dieuKien = "";
if (dieuKien) {
  console.log("điều kiện có giá trị true !");
} else {
  console.log("điều kiện có giá trị true !");
}

```

- Trừ 6 giá trị trên ra thì các giá trị khác có giá trị là true

  VD;

  ```
  let dieuKien = "ok";
  if (dieuKien) {
  console.log("điều kiện có giá trị true !");
  } else {
  console.log("điều kiện có giá trị true !");
  }


  ```

  ## III. Toán tử bằng: == với === vs (!= và !==) :

  ==> Về cơ bản hảy nhớ === là so sánh bằng nghiêm ngặt , tức là gì ???
  Tức là nó không thực hiện ép kiểu ,Khi so sánh các giá trị
  <Nôm na là : 2 giá trị được coi là hoàn toàn giống nhau khi cả về kiểu và giá trị của chúng phải giống nhau>

  Toán tử `===` : chỉ bằng nhau khi mà 2 giá trị có cùng cả kiểu và giá trị

  ==> Còn toán tử == là so sánh bằng lỏng lẻo : Tức là nó không thực hiện ép kiểu trước khi so sánh
  Toán tử `==` : chỉ cầng bằng nhau về giá trị là được rồi

  VD:

  ```
  console.log("2022" == 2022);
  // tương đương
  console.log(Number("2022") === 2022);
  ```

  - Giới thiệu câu lệnh prompt:
    Câu lệnh prompt được sử dụng để tạo ra một cửa sổ nhắc nhở, sẽ có một ô input để nhập
    ==> lưu ý : giá trị nhập vào sẽ là kiểu String

  - Toán tử so sánh != và !== có cơ chế hoạt động cũng tương tự như == và === nhưng ngược lại về kết quả so sánh thôi

## III. Cấu trúc if else if else :

Cú pháp :

```
if (condition1) {
	// block  if
} else if (condition 2) {
	// block else if
} else {
	// block else
}
```

Luồng code chạy : Đi từ trên xuống, gặp điều kiện nào đúng thì sẽ thực thi code trong đó và thoát ra ngoài, không quan tâm các block code khác
Nếu không có điều kiện nào đúng sẽ thực hiện code trong block else
 
VD:

```
let diem = 9.5;

if (diem >= 9) {
  console.log("Loại xuất sắc");
} else if (diem >= 8.0) {
  console.log("Loại giỏi");
} else if (diem >= 6.5) {
  console.log("Loại khá");
} else {
  console.log("Loại trung bình");
}
```

## IV. Toán tử logic

- Phép AND - &&
  Chỉ true khi tất cả đều true

- Phép OR - ||
  Chỉ false chi tất cả đều false

- Phép NOT - !
  Đối nhau : true khi flase và flase khi true

<img src = "https://niithanoi.edu.vn/pic/Product/images/tutorials/cac-loai-toan-tu-logic-trong-javascript.jpg">
VD:

```
let a = 10;
let b = 12;

if (!a || a < b && ++a == --b) {
  console.log("ok");
} else {
  console.log("Not ok ");
}

```

## V. Lệnh switch

==> Về cơ bản nó là 1 cơ chế điều khiển ,(dùng so sánh nghiêm ngặc === ) để so sáng key đưa vào với các giá trị case
để từ đó hiện thực code theo các luồng khác nhau

Cú pháp :

```
switch (key) {
  case value1:
  // code
  case value2:
  // code
  case value3:
  // code
  default:
  // code
}

```

<img src = "https://viettuts.vn/images/php/menh-de-switch-case-trong-php.png">

VD:

```
let key = 2;

switch (key) {
  case "2":
    console.log("Thứ 2 OK ");
    break;
  case 2:
    console.log("Thứ 2");
    break;
  default:
    console.log("Không phải thứ 2");
    break;
}

```

## VI. Câu lệnh và biểu thức

==> Hiểm nôm na là :

- Biểu thức đoạn code tạo ra 1 giá trị nào đó.
  VD : biểu thức số học 3 + 3, nối chuổi ,.., biểu thức toán tử 3 ngôi
- Câu lệnh là đoạn code lớn hơn , nhưng tự nó không tạo ra giá trị
  VD: câu lệnh gán, câu lệnh if else,..

## VII. Toán tử điều kiện (3 ngôi) <QUAN TRỌNG>

--> sẽ sử dụng nhiều trong các bài asm và lab
==> Toán tử có điều kiện cho phép so sánh giống if/else nhưng được viết ngắn gọn trên 1 dòng

Toán tử điều kiện còn được gọi là toán tử 3 ngôi gồm: điều kiện, phần hành động if, phần hành động else

Cú pháp (cơ bản)

```
điều kiện ? giá trị sẽ trả về khi điều kiện đúng : giá trị sẽ trả về khi điều kiện sai
```

<img src = "https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/toan-tu-trong-javascript/toan-tu-3-ngoi-trong-javascript/toan-tu-3-ngoi-trong-javascript.png">

==> Toán tử này tạo ra giá trị ==> nó là 1 biểu thức

VD:

```
let birthYear = 2000;
let info =
  2022 - birthYear >= 18
    ? `Tôi đã ${2022 - birthYear} tuổi (>= 18) nên tôi được phép lái xe !`
    : `Tôi mới ${2022 - birthYear} tuổi (< 18) nên tôi chưa được phép lái xe !`;
console.log(info);
```

## VII. Các bản phát hành JavaScript: ES5, ES6+ và ESNext

1. Lịch sử phát triển JS

- Năm 1995, Netscape Navigator, lúc bấy giờ là trình duyệt thống trị đã thuê một người tên là Brendan Eich để tạo ra phiên bản JavaScript đầu tiên chỉ trong 10 ngày, nó được gọi là "Mocha".

- Năm 1996, Mocha được đổi tên thành công cụ Livescript, công cụ này sau đó được đổi tên thành JavaScript vì một lý do đơn giản, để thu hút các nhà phát triển từ ngôn ngữ hot nhất lúc bấy giờ, đó là Java.

- Năm 1996, Microsoft đã tung ra Internet Explorer, về cơ bản sao chép JavaScript từ Netscape, nhưng họ gọi là JScript vì lý do bản quyền.

- Năm 1997 đã phát hành ECMAScript one hoặc ES1. Đây là tiêu chuẩn chính thức đầu tiên cho ngôn ngữ JavaScript.

- Năm 2009, phiên bản ES5 đã được phát hành với rất nhiều tính năng mới tuyệt vời.

- Tháng 6 năm 2015, phiên bản ES6 (ES2016) mới được chờ đợi đã được tung ra với nhiều tính năng tuyệt vời.

- Sau đó mỗi năm đều có các phiên bản mới ES2017,... không có quá nhiều khác biệt với ES6.

2. Khả năng tương thích ngược của jS

- Công cụ JavaScript trong trình duyệt của chúng ta ngày nay có thể hiểu mã cũ được viết cách đây 25 năm (ES1), mà không cần phải dựa vào số phiên bản hoặc bất cứ thứ gì tương tự.

- Điều đó có nghĩa là không có bất kỳ thứ gì bị xóa khỏi ngôn ngữ mà chỉ được thêm vào trong các bản phát hành mới.

3. Khả năng tương thích chuyển tiếp

- Javascript không có tính tương thích chuyển tiếp, các trình duyệt hiện tại không thể hiểu code của tương lai.

4. Giai đoạn phát triển và giai đoạn sử dụng sản phẩm
   Giai đoạn phát triển là khi bạn đang xây dựng trang web để đảm bảo có thể sử dụng các tính năng JavaScript mới nhất thì tất cả những gì cần làm là sử dụng phiên bản mới nhất của trình duyệt Google Chrome.

Giai đoạn sản xuất là khi ứng dụng web đã hoàn tất, triển khai trên internet và sau đó nó hoạt động được trong trình duyệt của người dùng.

- Ở giai đoạn này sẽ có khả năng xảy ra lỗi vì không kiểm soát được người dùng sử dụng trình duyệt phiên bản nào

- Giải pháp cho vấn đề này về cơ bản là chuyển đổi các phiên bản JavaScript hiện đại này trở lại ES5 bằng cách sử dụng một quá trình được gọi là transpiling và cũng là polyfilling.

==> Chúng ta có thể tìm hiểu thêm về polyfilling là gì ??

==> Polyfilling cơ bản là việc chúng ta kiểm tra xem 1 function hay chức năng nào đó có được hổ trợ trên những trình duyệt cũ hay không, nếu không có thì ta tiến hành khai báo hàm chức năng đó để code có thể chạy ổn trên các trình duyệt củ ấy !

VD:
ví dụ về polyfilling :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

kiểm tra phiên bản hổ trợ
https://caniuse.com/?search=includes

5. Các phiên bản của JS đang được sử dụng ra sao

- ES5 được hỗ trợ đầy đủ trong các phiên bản của trình duyệt Internet Explorer 9 đến 2011, đó là sự lựa chọn an toàn để sử dụng

- Các phiên bản mới hơn từ ES6 được hỗ trợ tốt trong các trình duyệt hiện đại, để không phá vỡ web sẽ cần đến quá trình transpiling và polyfilling

- Các phiên bản ES2021, ES2021 được gọi là ESNext (bản phát hành tương lai)

6. Phiên bản nào của JS sẽ được sử dụng chính trong môn học này

- Trong khóa học này sẽ sử dụng ES6 để giảng dạy, nhưng bạn vẫn được học cách sử dụng và hiểu sự thay đổi so với các phiên bản cũ.

## VIII. Tổng kết

Cần lưu ý các ý chính sau :

1. Lịch sử JS <nắm cơ bản>
2. Cách thức JS chuyển đổi kiểu dữ liệu trong các toán tử tính toán
   ==> Nên thực hành các trường hợp để tự khám phá thêm sẽ nhớ lâu hơn
3. Quy ước của JS về các giá trị boolean true và flase , toán tử so sánh , logic
   ==> Cơ bản nhưng khá quan trọng, sẽ gặp nhiều trong bài tập và asm
4. Phân biệt được biểu thức và câu lệnh <cơ bản>
5. Câu lệnh switch cũng như toán tử điều kiện (3 ngôi) bên cạnh câu lệnh if/else
<Phần này quan trọng nên nắm kỹ , sẽ thuận tiện khi code mà hiểu rõ về toán tử 3 ngôi , nhất là khi làm việc với DOM, trong các asm và bài lab>

   <br>
<p><b><i><============ Kiên trì cố gắng và không ngại khó ============></i></b></p>
