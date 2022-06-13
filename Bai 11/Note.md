# Bài 11 - Tìm hiểu rõ hơn về Hàm

## I. Giới thiệu

<b>Mở rộng các kiến thức đã học được về hàm ở bài 4, trong bài học này, chúng ta sẽ tìm hiểu về:</b>

- Cách thức truyền các tham số khác nhau vào hàm
- Các dạng hàm khác nhau
- Định nghĩa và ứng dụng của hàm Callback
- Viết và sử dụng hàm trong hàm

## II. Truyền đối số : Value và Reference

Ví dụ :

```
let id = "P0";

const pet = {
  id: "P001",
  name: "Lucky",
};

function editPet(petObj, newId) {
  newId += "OK";
  petObj.id = newId;
}

editPet(pet, id);
// pet có thay đổi
console.log(pet);
// id không thay đổi
console.log(id);
```

==> Kết luận về thay đổi giá trị nguyên thủy và Object ở trong hàm

- Truyền một biến primitive vào trong một hàm giống việc tạo một bản sao biến (đối số) được truyền vào ở bên ngoài hàm

- Khi truyền một object vào một function nó cũng giống như việc sao chép một Object bên ngoài, đều trỏ tới một giá trị object trong bộ nhớ heap. Do đó khi thay đổi giá trị các thuộc tính, phương thức bên trong object đó thì thật sự Object bên ngoài cũng sẽ thay đổi theo (Vì sao ? --> Vì chúng cùng trỏ đến 1 vùng nhớ chứa giá trị object đó). Điều này dễ gây ra lỗi khi hai function cùng thao tác trên 1 object

==> Hiểu về 2 thuật ngữ truyền vào giá trị và truyền thao chiếu

`Có 2 thuật ngữ được dùng khi truyền thao số cho function là:`

- Truyền vào giá trị (pass by value) :JS có điều này
- Truyền vào tham chiếu (pass by reference) : JS không có (lưu ý)

## III. First-Class Function và Higher-Order Function :

### 1. Thế nào là first-class function :

- JS là ngôn ngữ có các first-class function, có nghĩa là các function được coi như là các giá trị
- Các function là một loại object đặc biệt trong JS, coi các function là các giá trị nên có thể :

1. Lưu trữ function trong các biến hoặc các thuộc tính của object
2. Truyền các function làm đối số cho các function khác (Ví dụ addEventListener() trong DOM )
3. Return - trả về 1 function từ 1 funtion khác
4. Gọi phương thức, thuộc tính của function : vd , function nào cũng có thuộc tính `.name` hay cũng có các phương thức như `.apply , .bind , .call`

VD:

```
const pet = {
  id: "P001",
  name: "Lucky",
  birthYear: 2017,
  // trường hợp lưu trữ hàm vào 1 thuộc tính
  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

// trường hợp lưu trữ hàm vào 1 biến
const f = pet.calcAge;

const getSum = (num1, num2) => num1 + num2;

function myFunc(f) {
  const a = 20;
  const b = 30;
  console.log(`Tổng của 2 số ${a} và ${b} là : ${f(a, b)}`);
}

// trường hợp function làm đối số của 1 function khác
myFunc(getSum);

// trường hợp : function được trả về từ 1 function khác
function counter() {
  let count = 0;

  return function () {
    console.log(++count);
  };
}

const func = counter();

func();
func();
func();
func();
func();

// trường hợp gọi thuộc tính của function
console.log(func.name);

```

### 2. Higher-Order-Function là gì ?

Một hàm mà lấy các hàm khác làm đối số hoặc trả về 1 hàm khác , hoặc là có cả 2 đặc tính đó thì được gọi là Higher-Order-Function

1. Function là một đối số truyền vào function khác: Function này thường được gọi là callback function, callback function sẽ được gọi sau bởi higher order function

2. Function trả về một function khác (sẽ đề cập ở phía sau)

===> Tóm lại :
Ta hiểu nôm na thế này :

- First-Class function là 1 tính năng của JS
- Còn Higher Order Function tồn tại vì nó được xây dựng trên first class function (nếu 1 ngôn ngữ không có first class function thì sẽ không có cái gọi là Higher Order Function , VD: C,C++,JAVA, ... làm gì có cái gọi là Higher Order Function )

## IV.Các hàm nhận hàm Callback

Callback function về cơ bản là 1 hàm sẽ được gọi bởi 1 hàm khác. Ví dụ có 1 callback function là hàm A, hàm A được truyền vào hàm B thông qua tham số của hàm B, và bên trong hàm B sẽ gọi hàm A để thực hiện chức năng nào đó

VD:

```
function A() {
  console.log("Đây là 1 callback function A!");
}
function A2() {
  console.log("Đây là 1 callback function A2!");
}

function B(f) {
  console.log("Đây là Higher-Order Function !");
  f();
}

B(A);
B(A2);

```

==> Thuộc tính name

==> Tại sao hàm callback lại hữu ích và trở nên thông dụng

- Giúp dể dàng phân tách hoặc viết code thành nhiều phần có thể tái sử dụng và kết nối với nhau

- Tạo ra sự trừu tượng, ẩn chi tiết của một số code được thực thi bởi vì chúng ta không thực sự quan tâm đến những chi tiết đó.

VD: hàm addEventListener(): có callback truyền vào sẽ được thực thi (tức hàm addEventListener này gọi bên trong code của nó để thực thi khi sự kiện xảy ra ==> Nhưng chúng ta có cần biết bên trong hàm addEventListener này nó thực hiện cái gì và code ra sao không ? ==> Không cần đúng không ? đó là tiêu biểu cho việc trừu tượng và ẩn chi tiết của một số code được thực thị khi chúng ta không cần thực sự quan tâm đến những chi tiết ấy).

```
const h1EL = document.querySelector("h1");

h1EL.addEventListener("click", function () {
  alert("Xin chào, tôi là H1 !");
});

```

## V. Hàm trả về hàm

VD:

```
const show = function () {
  return function (obj) {
    console.log(`Tôi là ${obj.name}, năm nay tôi ${obj.age}`);
  };
};

const sv1 = {
  name: "Nguyên Văn A",
  age: 19,
};

const sv2 = {
  name: "Đặng Tiến Nam",
  age: 23,
};

const showInfo = show();

showInfo(sv1);
showInfo(sv2);

```

## VI. Phương thức call và apply

### 1. Phương thức call

`Có dạng : call(thisArg, arg1, ... , argN)`

- Phương thức call là phương thức có sẵn của 1 hàm
- Đối số đầu tiên của phương thức call là đối tượng mà chúng ta muốn từ khóa this trỏ đến
- Các tham số sau là các đối số muốn truyền vào hàm gốc

VD:

```
const sv1 = {
  name: "Nguyên Văn A",
  birthYear: 2000,
  getInfo: function (gioiTinh, tenTruong) {
    console.log(
      `Tôi là : ${this.name}, giới tính ${gioiTinh}, năm nay tôi ${
        2020 - this.birthYear
      }, tôi đang học tại ${tenTruong}`
    );
  },
};

const sv2 = {
  name: "Đỗ Thị B",
  birthYear: 2002,
};

const sv3 = {
  name: "Nguyễn Đình Tiến",
  birthYear: 1998,
};

const showInfo = sv1.getInfo;

showInfo.call(sv1, "Nam", "Đại học Funix");
showInfo.call(sv2, "Nữ", "Đại học Khoa Học Tự Nhiên");
showInfo.call(sv3, "Nam", "Đại học Bách Khoa");

```

--> Lưu ý: thứu tự các đối số truyền vào rất quan trọng !

### 2. Phương thức apply

`Có dạng apply(thisArg, argsArray)`

- Phương thức apply gần giống với phương thức call, tuy nhiên nó không nhận được các đối số sau từ khóa this, thay vào đó nó nhận đối số là 1 array : array này là mảng chứa các đối số ta muốn đưa vào

- Cũng như call, đối số đầu tiên là đối tượng mà chúng ta muốn từ khóa this trỏ đến

- Đối số thứu 2 là mảng dữ liệu lưu trữ các đối số ta muốn đưa vào hàm gốc `THEO ĐÚNG THỨ TỰ`

VD:

```
const sv1 = {
  name: "Nguyên Văn A",
  birthYear: 2000,
  getInfo: function (gioiTinh, tenTruong) {
    console.log(
      `Tôi là : ${this.name}, giới tính ${gioiTinh}, năm nay tôi ${
        2020 - this.birthYear
      }, tôi đang học tại ${tenTruong}`
    );
  },
};

const sv2 = {
  name: "Đỗ Thị B",
  birthYear: 2002,
};

const sv3 = {
  name: "Nguyễn Đình Tiến",
  birthYear: 1998,
};

const showInfo = sv1.getInfo;

showInfo.apply(sv1, ["Nam", "Đại học Funix"]);
showInfo.apply(sv2, ["Nữ", "Đại học Khoa Học Tự Nhiên"]);
showInfo.apply(sv3, ["Nam", "Đại học Bách Khoa"]);

```

VD: 1 ví dụ khác về việc ứng dụng phương thức call và apply

```
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const arr3 = [12, 34, 56, 7, 8, 10, 22, 33];

const getSum = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("Tổng các số là : " + sum);
};

getSum.apply(null, arr1);
getSum.apply(null, arr2);
getSum.apply(null, arr3);

```

==> `Tóm lại`, 2 phương thức này giúp chúng ta xác định rõ từ khóa this trong hàm sẽ trỏ đến đối tượng tượng cụ thể nào do chúng ta chỉ định

## VII. Phương thức bind

### 1. Phương thức bind hoạt động ra sao ?

- Giống như call, bind cũng cho phép chúng ta đặt từ khóa this theo cách thủ công cho bất kì lệnh gọi hàm nào.

- Sự khác biệt là bind không gọi hàm ngay, nó trả về `MỘT HÀM MỚI` nơi mà từ khóa this bị ràng buộc. Nó được đặt thành bất kỳ giá trị nào mà chúng ta truyền vào bind.

`Có dạng bind(thisArg, arg1, ... , argN)`

- Đối số đầu tiên là đối tượng mà chúng ta muốn từ khóa this trỏ đến

- Các đối số sau (khác với phương thức call nhé) là các giá trị tham số cố định mà ta muốn thiết lập cho hàm. Nếu đã thiết lập trước các giá trị cố định thì lúc gọi hàm ta không cần phải truyền thêm đối số đó vào

VD:

```
const sv1 = {
  name: "Nguyên Văn A",
  birthYear: 2000,
  getInfo: function (gioiTinh, tenTruong) {
    console.log(
      `Tôi là : ${this.name}, giới tính ${gioiTinh}, năm nay tôi ${
        2020 - this.birthYear
      }, tôi đang học tại ${tenTruong}`
    );
  },
};

const sv2 = {
  name: "Đỗ Thị B",
  birthYear: 2002,
};

const sv3 = {
  name: "Nguyễn Đình Tiến",
  birthYear: 1998,
};

const showInfo = sv1.getInfo;

const f = showInfo.bind(sv1);
f("nam", "Đại học Funix");

showInfo.bind(sv2)("nữ", "Đại học Khoa học tự nhiên");
showInfo.bind(sv2, "Nữ")("Đại học Khoa học tự nhiên");
showInfo.bind(sv2, "Nữ", "Đại học Khoa học tự nhiên")();
showInfo.bind(sv3, "Đại học Khoa học tự nhiên")("nam");

```

### 2. Sử dụng bind với event listener

- Từ khóa this trong hàm callback của event listener luôn trỏ vào đối tượng DOM gọi hàm đó

- Để sử dụng được từ khóa this của hàm call back thì chúng ta cần truyền vào 1 hàm mà không gọi nó ngay, và cần ràng buộc lại đối tượng mà từ khóa this cần trỏ đến, do đó, ta cần sử dụng phương thức bind

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Bài 11</h1>

    <button>click here</button>

    <script>
      const h1El = document.querySelector("h1");
      const btnEl = document.querySelector("button");

      btnEl.addEventListener("click", myFunc.bind(h1El));

      function myFunc() {
        console.log(this);
        this.style.backgroundColor = "red";
      }
    </script>
  </body>
</html>
```

## VIII. Closures

- Closure không phải là một tính năng mà chúng ta có thể sử dụng một cách rõ ràng.

- Closure tự động xảy ra trong những tình huống nhất định.

### 1. Khái niệm về Closure

- Một closure làm cho một hàm nhớ tất cả các biến đã tồn tại, tại hàm sinh ra biến.

- Bất kỳ hàm nào cũng luôn có quyền truy cập vào môi trường biến của execution context nơi mà hàm đó được tạo, ngay cả sau khi execution context đó đã biến mất. Kết nối này được gọi là closure.

- Closure về cơ bản là variable environment gắn liền với hàm, tại thời gian và địa điểm nơi hàm được tạo. Có thể nói dễ hiêu hơn: nhớ closure một hàm sẽ không bị mất kết nối với các biển tồn tại tại nơi sinh ra của hàm, ngay cả khi hàm sinh ra nó đã return

TÓM LẠI: cần nhớ đơn giản như sau

Closure làm cho 1 hàm có thể ghi nhớ phạm vi nơi nó được tạo ra và truy cập được biến ở bên ngoài phạm vi của nó !!!

==> Hàm closures có thể truy cập tới biến của hàm chứa nó, dù cho hàm đó đã return (Biến được tham chiếu nhờ closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong)

VD:

```
function makeCounter() {
  // ban đầu counter bằng 0
  let count = 0;

  // trả về một hàm khác
  // hàm này tăng counter lên 1 đơn vị và sau đó return về counter
  return function () {
    return ++count;
  };
}

// sử dụng -> counter chính là nested function
let counter1 = makeCounter();

// sau mỗi lần gọi hàm counter1() thì giá trị count tăng lên 1
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

```

## IX. Tổng kết

Trong bài học này chũng ta đi sâu vào nghiên cứu các khía cạnh nâng cao về hàm , và nó rất quan trọng cần nắm rõ để có thể code được những dự án, bài tập phức tạp, và việc nắm rõ cũng sẽ giúp chúng ta có thể dể dàng tìm bug hay debug một cách dể dàng hơn khi gặp lỗi
==> Do đó, cần nắm rõ những kiến thức trọng tâm sau :

- Sự khác biệt giữa việc truyền vào object/dữ liệu nguyên thủy làm tham số cho hàm.

- Khái niệm và cách sử dụng cụ thể cho First-Class Function và Higher-Order Function.

- Định nghĩa hàm callback – hàm thông dụng nhất được sử dụng trong JS.

- Ứng dụng hàm trả về hàm.

- Các phương thức nâng cao cho hàm như call, apply, bind cũng như hoàn cảnh sử dụng cụ thể.

- Hiểu và vận dụng và giải thích được closure
