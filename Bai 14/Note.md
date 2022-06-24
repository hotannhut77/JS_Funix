# Bài 14 - OOP với JavaScript

## I. Giới thiệu

OOP (viết tắt của Object Oriented Programming) – lập trình hướng đối tượng là một phương pháp lập trình dựa trên khái niệm về lớp và đối tượng. OOP tập trung vào các đối tượng thao tác hơn là logic để thao tác chúng, giúp code dễ quản lý, tái sử dụng được và dễ bảo trì. Bất kỳ developer nào muốn đi trên con đường lập trình cũng đều phải biết về OOP.

Trong bài học này, chúng ta sẽ tìm hiểu thật kỹ vào thực tế lập trình hướng đối tượng (OOP) là gì và các cách khác nhau để triển khai nó trong JavaScript. Chúng ta sẽ bắt đầu với một số khái niệm cơ bản và đi vào các tầng kiến thức thấp hơn trước khi chuyển sang cách thực hành và triển khai OOP trên ES6. Chúng ta cũng sẽ tìm hiểu sâu hơn về tính kế thừa trên JS – một trong 4 đặc tính cơ bản của OOP.

## Lập trình hướng đối tượng là gì ?

### 1. OOP là gì ?

- Lập trình hướng đối tượng là mô hình lập trình dựa trên khái niệm đối tượng. Mô hình lập trình sẽ quy định phong cách code, cách viết và tổ chức code.

- Sử dụng mô hình đối tượng để mô hình hóa, mô tả các khía cạnh trong thế giới thực

- Các object có thể chứa dữ liệu bao gồm thuộc tính (properties) và phương thức - method (code).

- Bằng cách sử dụng object chúng ta đóng gói tất cả dữ liệu và hành vi tương ứng thành một khối dễ dàng thao tác.

- Trong OOP, các đối tượng là các đoạn / khối mã độc lập; Các đối tượng là các khối xây dựng của ứng dụng và tương tác với nhau.

- Tương tác xảy ra thông qua giao diện công khai - public interface (API)- các phương thức mà code bên ngoài đối tượng có thể truy cập và sử dụng để giao tiếp với đối tượng.

- OOP tồn tại để đáp ứng mục tiêu câu trúc, tổ chức code linh hoạt hơn và dễ dàng bảo trì.

- Hiện nay OOP là mô hình lập trình được sử dụng rộng rãi nhất trong kỹ thuật lập trình.

### 2. Class (lớp) và instance trong OOP truyền thống

- Chung ta đã sử dụng object trong những buổi học trước nhưng chúng ta mới có những object lỏng lẻo, chưa tương tác với nhau.

- Trong OOP chúng ta cần một cách thống nhất để tạo ra các object mới từ code của mình.

- Class như một bản thiết kế chi tiết, sau đó tạo ra object mới dựa trên các quy tắc được quy tắc trong class.

- Các object được tạo từ class được gọi là instance của class, instance là một đối tượng thực có các giá trị thuộc tính và hành vi thực.

VD:

```
// ===>  Ví dụ về instance
const myArray = new Array(10).fill(0);
console.log(myArray);
// câu lệnh kiểm tra xem đối tượng có phải là 1 thể hiện
// của 1 Class hay không
console.log(myArray instanceof Array);
```

### 3. 4 đặc tính cơ bản của OOP

- Trừu tượng: Sự trừu tượng cơ bản là bỏ đi hoặc ẩn chi tiết không quan trọng. Nó cho phép ta có cái nhìn tổng quan về những gì mà chúng ta triển khai.

- Đóng gói: Đóng gói là giữ một số thuộc tính và các phương thức private bên trong class để chúng không truy cập được từ bên ngoài class. `Chúng ta luôn có mục tiêu là đóng gói hầu hết các trạng thái và phương thức và chỉ công khai các phương thức thiết yếu.`

- Kế thừa: Trong OOP chúng ta có hai class có liên quan chặt chẽ với nhau, một class kế thừa class kia và chúng sẽ là class cha và class con. Class con kế thừa các thuộc tính và phương thức của class cha. Tính thừa kế làm cho tất cả các thuộc tính và phương thức của một class nhất định có sẵn cho class con, nó tạo thành một hệ thống phân cấp.

- Đa hình : (nhiều hình dạng) Một class con có thể ghi đè một phương thức mà nó được thừa kế từ một class cha.

## III. OOP trong JavaScript

Trong JS có một thứ gọi là Prototype, tất cả các đối tượng trong JS được liên kết với một đối tượng prototype nhất định.

- Mỗi đối tượng có một prototype.

- Đối tượng prototype chứa các phương thức và thuộc tính mà tất cả các đối tượng được liên kết với prototype đó có thể truy cập và sử dụng => Hành vi này gọi là kế thừa nguyên mẫu.

- Kế thừa nguyên mẫu là tất cả các đối tượng được liên kết với một đối tượng prototype nhất định, đối tượng có thể sử dụng các thuộc tính và phương thức của prototype đó.

- Kế thừa nguyên mẫu khác với kế thừa thông thường, đó là một instance kế thừa một class (có thể gọi là cơ chế ủy quyền).

VD: Về array mà ta hay sử dụng

```
const arr1 = [1, 2, 3, 4, 5]; // cách 1 để khai báo 1 array
const arr2 = new Array(1, 2, 3, 4, 5); // cách 2 để khai báo 1 array
console.log(arr1, arr2);

const HTN = {
  name: "HTN",
  age: 24,
};
console.log(HTN);
```

`TÓM LẠI : ` Ta cần hiểu đơn giản như sau

- Prototype là <b>đối tượng</b> , đối tượng này như 1 hợp chứa ? chứa cái gì ? Nó có thể chứa phương thức, thuộc tính. Mà các đối tượng có liên kết đến đối tượng prototye này (tức hợp chứa này) có thể lấy ra và sử dụng mà không cần định nghĩa các phương thức và thuộc tính đó. (Phần prototype này là chìa khóa mở cửa để chúng ta hiểu về OOP cũng như kế thừa trong JS, chi tiết sang phần tiếp đến đây mình sẽ giải thích rõ hơn)

==> Có 3 cách để triển khai kế thừa prototype trong JS

1. Hàm khởi tạo - Constructor function

- Là kỹ thuật tạo đối tượng từ một hàm

2. Class trong ES6

- Là cú pháp thay thế cho hàm khởi tạo
- Có cách hoạt động , bản chất cũng chính như hàm tạo mà thôi
- Và chú ý, ES6 class, không hoạt động giống class như trong OOP cổ điển ( ví dụ như trong Java, C#)

3. Object.create()

- Là cách dể nhất để liên kết 1 đối tượng với 1 đối tượng nguyên mẫu

==> Chúng ta sẽ đi chi tiết vào các cách sau

## IV. Hàm khởi tạo (constructor function) - toán tử new

Thế nào là 1 hàm khởi tạo constructor function :

- Về cơ bản, hàm khởi tạo cũng chỉ là 1 hàm thông thường mà thôi, chỉ khác ở cách sử dụng , là khi gọi hàm khỏi tao, ta sẽ sử dụng đi kèm với toán tử `new` với mục đích là tạo ra 1 đối tượng.

VD:

```
// Một số lưu ý:
// 1. Thường sẽ viết tên của hàm tạo bắt đầu bằng chữ Cái IN HOA
// 2. Không dùng hàm mũi tên để làm hàm khởi tạo, vì hàm mũi tên
//    không có từ khóa this của riêng nó ==> có thể dùng 2 loại hàm còn lại
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

const HTN = new Person("Hồ Tấn Nhựt", 24);
/**
 * ===> Giải thích về toán tử new:
 * Khi gọi toán tử new theo sau là 1 hàm khỏi tạo được gọi
 *  thì JS sẽ làm như sau :
 * 1. Khi gọi new, 1 đối tượng rỗng {} sẽ được tạo ra (được cấp phát bộ nhớ)
 * 2. Từ khóa this trong hàm sẽ được gán bằng đối tượng vừa được tạo ra
 * 3. Hàm khởi tạo được chạy và bên trong code sẽ thực hiện thiết lập
 *    các thuộc tính / phương thức cho đối tượng được tạo bỏi toán tử new
 * 4. Đối tượng "prototype" : là giá trị của thuộc tính prototye của hàm tạo
 *  sẽ được đối tượng vừa tạo ra liên kết đến --> kế thừa
 * 5. Cuối cùng, hàm sẽ tự động trả về 1 đối tượng
 *    (và có thể lưu trữ nó vào 1 biến)
 */

console.log(HTN);

```

Một số lưu ý khác:

- Cách sử dụng `new` đã trình bày trong ví dụ
- Đối tượng được tạo ra từ hàm tạo, có thể gọi đối tượng đó là instance của hàm tạo đó ( trong ví dụ thì : HTN là 1 instance (1 thể hiện, hay 1 cá thể của Person))
- Có thể sử dụng `instanceof` để kiểm tra xem 1 đối tượng nào đó có phải là 1 thể hiện của 1 kiểu nào đó hay không ?
  VD:

```
console.log(HTN instanceof Person);
// true : vì đối tượng HTN là 1 instance của Person
```

## V. Prototype (QUAN TRỌNG NHẤT)

Có những cách nào để thêm các phương thức , thuộc tính cho các đối tượng được tạo ra từ hàm tạo ? Và các cách đó khác nhau như thế nào
OK, ta qua ví dụ để rõ hơn nhé :
VD:

```
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;

  // cách 1 : tạo riêng cho từng đối tượng ngay trong hàm tạo
  this.getAge1 = function () {
    console.log(`Tuổi của ${this.name} là : ${2022 - this.birthYear}`);
  };
  // cách 1 : tạo riêng cho từng đối tượng ngay trong hàm tạo
  this.tenTruong = "Funnix";
};

const HTN = new Person("Hồ Tấn Nhựt", 1998);
const ABC = new Person("ABC", 1997);
console.log(HTN);
console.log(ABC);

// cách 2: tạo bên ngoài hàm tạo dùng phương thức .prototype của hàm tạo

// cách 3: dùng phương thức .__proto__ của đối tượng

// cách 4 : tạo riêng trên từng đối tượng qua tên đối tượng

ABC.getInfo = function () {
  console.log("test");
};

console.log(ABC);
console.log(HTN);



```

Một số lưu ý cần nắm :

- thuộc tính prototype của hàm tạo, sẽ chứa giá trị là 1 đối tượng, đối tượng này thường được gọi với cái tên prototype mà ta hay gọi

- thuộc tính `__proto__` trên đối tượng, sẽ có liên kết đến đối tượng prototype của chúng ta, hay nói cách khác, giá trị thuộc tính `__proto__` là 1 đối tượng, và đối tượng này cũng chính là đối tượng prototype (tức giá trị của thuộc tính .prototye của hàm tạo)
- Các cách thêm tạo thuộc tính và phương thức , đã trình bày ở ví dụ trên : cần nắm các cách và sự khác biệt của nó ==> nên định nghía các thuộc tính, phương thức dùng chung cho các đối tượng qua prototype để tối ưu code và bộ nhớ
- Bản chất của prototype là như 1 hợp chứa, chỉ cần định nghĩa 1 lần , và lưu trữ lại, sau đó các đối tượng có liên kết với nó có thể lấy ra dùng mà không phải định nghĩa lại ("Không là mà vẫn có ăn là có thật kaka !")

## VI. ES6 Class

XEM ví dụ sau để rõ hơn nhé :

```
/**
 * Cú pháp khai bao 1 class (tương tự như khai báo hàm) như sau :
 * Có 3 cách :
 * Cách 1 : Khai báo class (declaration class) :
 * 1. Bắt đầu bằng từ khóa class
 * 2. Tiếp đến là tên của class (thường sẽ được bắt đầu bằng chữ hoa đầu)
 * 3. Tiếp đến là cặp dấu ngoặc nhọn {}
 * 4. Bên trong {} sẽ là code của chúng ta
 */

class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  // khai báo bên ngoài hàm constructor ==> sẽ tương tự như dùng
  // phương thức prototype
  getAge1() {
    return 2022 - this.birthYear;
  }
}

const HTN_Cl = new PersonCl("Hồ Tấn Nhựt", 24);
console.log(HTN_Cl);

// thêm phương thức thủ công từ bên ngoài class
// cũng tương tự như hàm tạo cả thôi
PersonCl.prototype.getAge = function () {
  console.log(`Tuổi của ${this.name} là : ${2022 - this.birthYear}`);
};

/**
 * Cách 2: biểu thức class (expression class)
 * 1. Bắt đầu bằng từ khóa khai báo biến (let ,var hoặc const)
 * 2. tên biến , sau đó là phép gán ( dấu = )
 * 3. tiếp đến là từ khóa class
 * 4. theo sau là cặp {}. và bên trong là code của chúng ta
 */
const PersonCl2 = class {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
};

```

`LƯU Ý: `

- Về bản chất, class cũng giống như 1 hàm đặc biệt mà thôi, và nó cũng hoạt động tương tự như hàm khỏi tạo
- Việc sử dụng class ES6 thực chất để che dấu bản chất thật sự bên trong của việc sử dụng hàm tạo của JS (kiểu để thân thiện với lập trình viên, khi mà mô hình OOP quá nổi trội hiện tại), chứ thực ra nguyên tắc hoạt động vẫn là hàm tạo và prototype mà thôi
- Việc sử dụng hàm tạo hay Class thì tùy vào sở thích của chúng ta thôi, nhưng cái quan trọng cần nắm là gì ? Là cần hiểu rõ bản chất, cách hàm tạo hoạt động, toán tử new hoạt động, prototy là gì, và hoạt động ra sao.

## VII. Kế thừa với Constructor Functions

VD:

```
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.getAge = function () {
  console.log(`Tuổi của ${this.name} là : ${2022 - this.birthYear}`);
};

const Student = function (name, birthYear, id) {
  Person.call(this, name, birthYear);
  this.id = id;
};

// dùng Object.creat()
Student.prototype = Person.prototype;

const hs1 = new Student("Nguyễn Văn A", 2003, 220010);
console.log(hs1);
hs1.getAge();

// thêm thuộc tính

```

`LƯU Ý:`

- Nguyên tắc của kế thừa là để làm gì ? để tránh lặp lại code, tận dụng được code đã viết, giúp bảo trì, sữa đổi nhanh chấn và có tính module hóa hơn

- Cách tạo kế thừa thủ công từ hàm tạo: lưu ý dùng phương thức call trong hàm tạo, và dùng phương Object.creat() để tạo liên kết thủ công giữa các prototype

## VIII. Kế thừa trong ES6 Class

VD:

```
class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge1() {
    return 2022 - this.birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(name, birthYear, id) {
    super(name, birthYear);
    this.id = id;
  }
  // ghi đè phương thức
  getAge1() {
    console.log(`Tuổi của ${this.name} là : ${2022 - this.birthYear}`);
  }
}

const hsCl = new StudentCl("ABC", 2010, 19925);
console.log(hsCl.name);
hsCl.getAge1();


```

`LƯU Ý:`

- Sử dụng từ khóa `extends` để thể hiện sự kế thừa giữa 2 class (thay cho việc sử dụng Object.creat())
- Hàm super cần được sử dụng đầu tiên trong constructor (thay cho việc sử dụng phương thức call())

## IX. Tổng kết

Trong bài học này, chúng ta đã học được các kiến thức sau:

- Khái niệm về lập trình hướng đối tượng – OOP và vai trò của nó trong việc xây dựng các chương trình phần mềm.
- Các đặc trưng cơ bản của OOP nói chung và trong JS nói riêng.
- Cách triển khai và sử dụng OOP với constructor function và Class ES6 trên JS.
- Đi sâu vào tính kế thừa cũng như ứng dụng của nó.
