# Bài 5 - Object và vòng lặp

## I. Giới thiệu

- Như các bạn đã biết, Javascript có kiểu dữ liệu nguyên thủy, và còn 1 kiểu khác nữa đó là Object (kiểu dữ liệu phức hợp). Kiểu Object là kiểu được sử dụng nhiều nhất vì tính linh hoạt cực kỳ mạnh mẽ của nó trong việc xử lý dữ liệu với cách lưu trữ dữ liệu theo dạng từ điển (key:value hay khóa:giá trị).

- Bên cạnh đó, cấu trúc lặp là các cấu trúc for, while,… nhằm tổ chức thực thi các câu lệnh có mục đích lặp đi lặp lại nhiều lần. sử dụng cấu trúc lặp trong chương trình làm cho việc mô tả code trở nên ngắn gọn hơn rất nhiều, cách biểu diễn của chương trình cũng nhờ đó mà trong sáng, dễ hiểu hơn.

==> Trong bài học này, chúng ta sẽ tìm hiểu về:

- Làm quen với Object và phương thức.
- Các dạng vòng lặp khác nhau: for, while.

## II. Object

### 1. Giới thiệu về Object

- Bài trước chúng ta đã học về array (1 cấu trúc dữ liệu rất quan trọng trog JS), nhưng chúng ta thấy, để truy xuất 1 phần tử nào đó trong array ta phải biết chỉ mục của nó và chúng ta cần phải quan tâm đến thứ tự của các phần tử, vì thứ tự của chúng quyết định cách mà chúng ta truy xuất phần tử trong mảng. Và 1 vấn đề đăt ra là có cách nào để lưu trữ dữ liệu mà không cần quan tâm đến thứ tự , cũng như có thể truy xuất (lấy dữ liệu) một cách ngẫu nhiên hay không (không cần quan tâm đến thứ tự). ==> Object đã được tạo ra để giải quyết vấn đề này và còn rất rất nhiều những ứng dụng mạnh mẽ mà Object mang lại nữa. Chúng ta sẽ đi chi tiết và tìm hiểu về Object (cực kỳ quan trọng và chúng ta cần nắm rõ !)

- Object lưu trữ dữ liệu theo dạng key - value : trong đó key giống như tên biến , và value có thể thuộc bất kỳ kiểu dữ liệu nào, có thể là 1 string, number, boolean, một biểu thức, 1 đối tượng khác thậm chí là 1 hàm.

- Mỗi cặp key - value trong object được gọi là thuộc tính của object (lưu ý trong trường hợp value là 1 hàm thì sẽ được gọi với tên khác là phương thức --> sẽ tìm hiểu ngay sau !)

==> Làm cách nào để tạo ra 1 Object ???
OK ==> có 3 cách chính (Nhưng chính ta chỉ quan tâm đến cách thứ nhất ở thời điểm hiện tại, các cách sau sẽ được học ở các bài sau)

- Sử dụng khóa {} (hiện tại các bạn nên quan tâm vào cách này)
- Sử dụng từ khóa new Object() , hay dùng hàm constructor
- Sử dụng phương thức static Object.creat()

VD :

```
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1991,
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonasArray);
console.log(jonas);

```

- Sự khác biệt giữa array và object

<table> 
<tr>
<th>STT</th>
<th>Object </th>
<th>Array</th>
</tr>
<tr>

<tr>
<td>1</td>
<td>Lưu trữ dữ liệu theo dạng key - value</td>
<td>Lưu trữ dữ liệu theo thứ tự</td>
</tr>

<tr>
<td>2</td>
<td>Lấy ra các giá trị dựa vào tên của thuộc tính
</td> 
<td>
Lấy ra các giá trị dựa vào chỉ mục index của các phần tử trong mảng
</td>
</tr>

<tr>
<td>3</td>
<td>
Thứ tự các giá trị value được lưu trữ không quan trọng 
</td>
<td>
Thứ tự các giá trị được lưu trữ cực kỳ quan trọng vì qua thứ tự ta mới có thể truy xuất và lấy được giá trị của phần tử
</td>
</tr>

<tr>
<td>4</td>
<td>Object thường sử dụng cho dữ liệu phi cấu trúc</td>

<td>Array thường sử dụng cho dữ liệu có thứ tự</td>
</tr>
</table>

### 2. Cách truy xuất các thuộc tính

Có 2 cách để lấy giá trị của các thuộc tính đó là : dùng dấu chấm và dấu ngoặc vuông

VD:

```

console.log(jonas.firstName);
console.log(jonas["firstName"]);

let key = "friends";
console.log(jonas[key]);
```

==> Chúng ta cần cả 2 cách này để làm gì ?

- Khi sử dụng dấu ngoặc vuông ta có thể đặt bất kỳ biểu thwucs nào bên trong đó, sẽ giúp chúng ta linh hoạt trong 1 số trường hợp,

VD :

```
const monHoc = {
  mon1: "Web",
  mon2: "JS",
  mon3: "Java",
  mon4: "DSA",
  mon5: "Data",
};

let i = 0;

console.log(monHoc["mon" + ++i]);
console.log(monHoc["mon" + ++i]);
console.log(monHoc["mon" + ++i]);
console.log(monHoc["mon" + ++i]);
console.log(monHoc["mon" + ++i]);

```

- Còn khi sử dụng dấu chấm , ta chỉ có thể đưa vào key chính xác của thuộc tính mà thôi, không thể linh hoạt bằng

VD:

```
monHoc.('mon'+1); // sẽ báo lỗi ngay

```

==> Ta cần biết cả 2 cách để có thể linh động , đôi khi không thực hiện được cách này thì ta thực hiện cách khác

VD :

```
const HTN = {
  "my-email": "abc@gmail.com",
  address: "TP. Hồ Chí Minh",
  key2: "ok",
};

const key2 = "address";

// chỉ được cách này , vì nếu : HTN.my-email --> sẽ lỗi ngay
console.log(HTN["my-email"]);
console.log(HTN.key2);
console.log(HTN[key2]);
```

- Trường hợp nếu lấy ra 1 thuộc tính không có trong object thì sẽ trả về undefined

VD:

```
console.log(HTN.name); // undefined

```

==> Chú ý : ta có thể bổ xung thêm thuôc tính cua đối tượng ở bên ngoài dấu {}

VD :

```
const monHoc = {
  mon1: "Web",
  mon2: "JS",
  mon3: "Java",
  mon4: "DSA",
  mon5: "Data",
};

console.log(monHoc);

monHoc.mon6 = "Ứng dụng web bằng Java";
monHoc["mon7"] = "Đồ án ";

console.log(monHoc);

```

### 3. Các phương thức trong Object

- Như đã nói, nếu như giá trị value của cặp key - value nhận giá trị là 1 hàm thì trong trường hợp này ta sẽ gọi cặp key - value đó là phương thức của object.

- Nhớ lại bài trước về hàm, hàm thực sự cũng chỉ là 1 kiểu dữ liệu, do đó ta có thể gán hàm cho 1 biến (như trường hợp của biểu thức hàm) --> Do đó mà việc gán giá trị (value) cho 1 key trong object bằng 1 hàm là việc rất bình thường , và khi đó , ta sẽ có phương thức của đối tượng.

VD:

```
const myBMI = {
  mass: 75,
  height: 1.74,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
  displayBMI() {
    console.log("BMI =  " + this.calcBMI());
  },
};

console.log("Chỉ số BMI của bạn là " + myBMI.calcBMI);
console.log("Chỉ số BMI của bạn là " + myBMI.calcBMI());

myBMI.displayBMI();

```

==> Cú pháp this trong object ???

- Để truy cập vào giá trị của một thuộc tính ngay trong object thì sử dụng từ khóa this ,

- Từ khóa this hay biến this về cơ bản nó đại diện cho object(đối tượng) hiện tại của phương thức được gọi (hay là đối tượng đang gọi phương thức)

---> Về từ khóa this này chúng ta sẽ tìm hiểu sâu hơn ở các bài sâu nữa, nhưng hiện tại các bạn cứ nhớ là nếu muốn truy cập đến thuộc tính (kể cả phương thức ) của đối tượng đang xét thì ta nên dùng this . Tại vì 'this' có nhiều tác dụng lắm (về sau chúng ta sẽ tìm hiểu hết về nó !)

==> Chúng ta cũng có thể tạo 1 thuộc tính ngay bên trong phương thức của đối tượng bằng cú pháp :

```
this.ten_thuoc_tinh = giá trị gì đó ;
```

VD:

```
const myBMI = {
  mass: 75,
  height: 1.74,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },

  displayBMI() {
    console.log("BMI =  " + this.calcBMI());
  },
};

console.log(myBMI.BMI);

// chỉ được tạo ra khi thuộc tính calcBMI được gọi ()
myBMI.calcBMI();
console.log(myBMI.BMI);

```

==> Vậy quay lại bài trước chúng ta đã biết vì sao array lại có các phương thức rồi đúng không ?

- Vì thật ra array cũng là 1 dạng object đặc biệt, do đó chúng có các phương thức mà chúng ta đã sử dụng như (pop, push, shift, unshift, ...)

## III. Vòng lặp

### 1. Vòng lặp for

==> Vòng lặp làm gì ?
Vòng lặp đơn giản dùng để thực thi một hành động , một tác vụ nào đó một cách lặp đi lặp lại .

VD : ta có 1 danh sách 1000 học sinh, và chúng ta có bài toán là in ra tên của 1000 học sinh đó, bây giờ ta sẽ viết lệnh console.log(...) 1000 lần để in ra tên của 1000 học sinh đó hay sao ? KHÔNG , một trong những cách đó là ta có thể dùng for để làm điều này 1 cách đơn giản chỉ với vài dòng code

VD:

```
const listHS = [
  "Nam",
  "Bình",
  "Tuấn",
  "Tú",
  "Nghĩa",
  "Nhung",
  "Quốc",
  "Thái",
  "Linh",
];

const lenght = listHS.length;

for (let i = 0; i < lenght; i++) {
  console.log(`Tên của học sinh số ${i} là : ${listHS[i]}`);
}
```

==> Cấu trúc vòng lặp for
Như ví dụ nhỏ bên trên trên ta thấy :

- Vòng lặp for bắt đầu bằng từ khóa for , tiếp theo là biểu thức vòng lặp , và thân vòng lặp

==> Biểu thức vòng lặp gồm có 3 phần , cách nhau bởi dấu phẩy:

- 1.  Giá trị ban đầu của bộ đếm
- 2.  Điều kiện logic được đánh giá trước mỗi lần lặp, nếu điều kiện là true thì vòng lặp sẽ tiếp tục, nếu điều kiện là false thì vòng lặp sẽ dừng lại
- 3. Tăng bộ đếm

==> Giải thích về luồng code sẽ chạy như thế nào ???
<img width = "450px"  src = "https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/vong-lap-trong-javascript/for-trong-javascript/for-trong-javascript.png">

### 2. Vòng lặp for có sử dụng break, continue

==> Ta hay dùng for để duyệt các phần tử của mảng

VD : Ta có bài toán : Có 1 mảng số nguyên, hãy tìm số các số chẳn có trong mảng đó

```
const arrInteger = [23, 34, 10, 23, 45, 53, 27, 33];

const len = arrInteger.length;
let count = 0;

for (let i = 0; i < len; i++) {
  if (arrInteger[i] % 2 === 0) {
    count++;
  }
}

console.log("Số các số chẳn có trong mảng là : " + count);

```

==> Câu lệnh continue

- Continue là việc bỏ qua các câu lệnh bên dưới nó của vòng lặp hiện tại và thực hiện vòng lặp tiếp theo

<img width = "400px" src = "https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-continue-for.svg">

VD :

```
const myArr = [10, 20, "Ok", "ABC", 30, "40", 40, "NOT"];

// Ví dụ ta có 1 mảng chứ dữ liệu như trên
// hãy in ra các số có trong mảng và
// tính tổng các số có trong mảng trên

let sum = 0;

for (let i = 0; i < myArr.length; i++) {
  if (typeof myArr[i] !== "number") {
    continue;
  }

  console.log(myArr[i]);
  sum = sum + myArr[i];
}

console.log("Tổng của các số có trong mảng là : " + sum);


```

==> Câu lệnh break
Break được dùng để dừng lại hoàn toàn vòng lặp

<img src = "https://laptrinh.vn/uploads/images/gallery/2019-10/break_statement_flowchart_diagram.png">
<br>
<br>
VD:

```
const names = ["Nam", "Bình", "Tiến", "Huy", "Na", "Nghĩa", "Nhung"];

// kiểm tra xem bên trong danh sách có bạn nào tên Huy hay không?

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Huy") {
    console.log("Có bạn Huy ở trong danh sách !");
    break;
  }

  console.log(`Bạn này không phải bạn Huy (name : ${names[i]})`);
}

```

===> Tóm lại,

- các bạn chỉ cần hiểu đơn giản là : nếu gặp câu lệnh `continue` thì code sẽ bỏ qua các câu lệnh tiếp theo bên trong vòng lặp và tiến hành các bước tiếp theo của 1 vòng lặp mới (tức là sẽ tiến hành tăng / giảm bộ đếm , rồi kiểm tra điều kiện lặp ==> và thực hiện các câu lệnh bên trong vòng lặp)

- Còn khi gặp câu lệnh `break` thì code sẽ dừng hẳn vòng lặp.

### 3. Vòng lặp ngược và vòng lặp trong vòng lặp

==> Ví dụ về vòng lặp ngược :
Ta có thể duyệt qua mảng với thứ tự ngược lại

VD:

```
const arrInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// in ra các số trong mảng theo thứ tự từ đầu đến đuôi mảng

let str1 = "";
for (let i = 0; i < arrInt.length; i++) {
  str1 += arrInt[i] + " ";
}

console.log("Theo đúng thứ tự : " + str1);

// In ra các số trong mảng theo thứ tự ngược lại
let str2 = "";
for (let i = arrInt.length - 1; i >= 0; i--) {
  str2 += arrInt[i] + " ";
}

console.log("Theo thứ tự ngược lại: " + str2);

```

==> Ví dụ về vòng lặp trong vòng lặp :

```
const arr = ["A", "B", "C", "D"];

// vòng lặp đầu tiên
for (let i = 1; i <= 5; i++) {
  console.log(`Câu hỏi số ${i} :`);

  // vòng lặp thứ 2 bên trong vòng lặp đầu
  for (let j = 0; j < 4; j++) {
    console.log(`Đáp án ${arr[j]} : ...`);
  }
  console.log("-----------\n");
}
```

Ta có thể dùng các vòng lặp lòng nhau để làm gì đó, nhất là trong việc xử lý mảng 2 chiều , 3 chiều ,..

VD:

```
const hs1 = {
  name: "Nam",
  age: 20,
  friends: ["Bình", "Nguyên", "Tình", "Đào"],
};
const hs2 = {
  name: "Tuấn",
  age: 20,
  friends: ["Nam", "Chí", "Hiếu", "Tuấn", "Thiên"],
};
const hs3 = {
  name: "Bảo",
  age: 20,
  friends: ["Chí", "Ngọc", "Tình"],
};
const hs4 = {
  name: "Chí",
  age: 20,
  friends: ["Tuấn", "Hoa", "Định", "Hải", "Nghĩa", "Tình", "Nam"],
};

const listHS = [hs1, hs2, hs3, hs4];

// yêu cầu xuất ra tên bạn bè của từng học sinh có trong mảng listHS

for (let i = 0; i < listHS.length; i++) {
  console.log(`Các bạn của bạn ${listHS[i].name} là : `);

  for (let j = 0; j < listHS[i].friends.length; j++) {
    console.log(`${j + 1} : ${listHS[i].friends[j]}`);
  }

  console.log("-------------------\n");
}

```

## III. Vòng lặp while

Vòng lặp while hoạt động cũng giống vòng lặp for là thực hiện lặp đi lặp lại các tác vụ nào đó nhiều lần

<img width = "500px" src = "https://niithanoi.edu.vn/pic/Product/images/tutorials/so-do-vong-lap-while-trong-javascript.jpg">

VD1:

```
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

```

VD2:

```
const hs1 = {
  name: "Nam",
  age: 20,
  friends: ["Bình", "Nguyên", "Tình", "Đào"],
};
const hs2 = {
  name: "Tuấn",
  age: 20,
  friends: ["Nam", "Chí", "Hiếu", "Tuấn", "Thiên"],
};
const hs3 = {
  name: "Bảo",
  age: 20,
  friends: ["Chí", "Ngọc", "Tình"],
};
const hs4 = {
  name: "Chí",
  age: 20,
  friends: ["Tuấn", "Hoa", "Định", "Hải", "Nghĩa", "Tình", "Nam"],
};

const listHS = [hs1, hs2, hs3, hs4];

// yêu cầu xuất ra tên bạn bè của từng học sinh có trong mảng listHS

let i = 0;

while (i < listHS.length) {
  console.log(`Các bạn của bạn ${listHS[i].name} là : `);

  let j = 0;
  while (j < listHS[i].friends.length) {
    console.log(`${j + 1} : ${listHS[i].friends[j]}`);
    j++;
  }

  i++;
}

```

VD3:

```
let num = 0;

while (true) {
  if (num === 11) break;
  console.log(num);
  num++;
}

```

==> vòng lặp while có tính linh hoạt và không cần phụ thuộc vào biến đếm

## IV. Tổng kết

Trong bài học này chúng ta cần nắm chắc các kiến thức sau :

### 1. Hiểu về Object :

- Cách khai báo , khai báo bằng toán tử {}
- Cách truy xuất các thuộc tính của đối tượng qua dấu `.` và dâu `[]`
- Cách thêm thuộc tính cho đối tượng ở bên ngoài dấu {}
- Thế nào là các phương thức của đối tượng, cách thêm thuộc tính cho đối tượng , cách gọi phương thức của 1 đối tượng
- Vì sao cần this ? (sẽ tìm hiểu sâu hơn ở các bài sâu)
- Cách thêm 1 thuộc tính ngay bên trong 1 phương thức
- Biết sự khác biệt cơ bản giữa Array và Object

### 2. Vòng lặp

- Hiểu định nghĩa và ứng dụng của vòng lặp ? Vì sao phải cần có vòng lặp
- Hiểu cấu trúc vòng lặp for
- Vận dụng vòng lặp for để duyệt mảng array
- Hiểu và vận dụng được vòng lặp for ngược
- Hiểu và vận dụng được vòng lặp lòng nhau
- Hiểu cấu trúc của vòng lặp while

==> Code nhiều và không ngại khó !
