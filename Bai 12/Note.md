# Bài 12 - Làm việc với Mảng

## I. Giới thiệu

Mở rộng các kiến thức đã học được về array ở bài 4, trong bài học này, chúng ta sẽ tìm hiểu về:

- Các phương thức xử lý array, từ đơn giản đến phức tạp.
- Sử dụng vòng lặp ở trong array.
- Kỹ thuật Chaining Method (kết hợp nhiều hàm sử lý mảng với nhau).

## II. Các phương thức xử lý mảng đơn giản

==> <b>Tại sao array lại có phương thức ?</b>

- Phương thức là các hàm mà chũng ta có thể gọi trên các đối tượng. Bản thân array là một đối tượng đặc biệt nên nó cũng có các phương thức (các hàm được gắn vào array)--> chúng ta sẽ còn hiểu sâu hơn nữa là tại sao 1 array chũng ta khai báo ra không có định nghĩa các phương thức ấy mà sao chũng ta có thể gọi được phương thức ấy trên chính array của chúng ta ==> sau khi tìm hiểu về bài OOP - kế thừa nguyên mẫu chúng ta sẽ có câu trả lời !

==> OK bây giờ ta sẽ đi vào một số các phương thức thông dụng của array hay dùng

### 1. Phương thức slice()

- Phương thức slice() này trả về một array mới có các phần từ được lấy từ một array gốc.
- Mảng gốc sẽ không bị sửa đổi.

==> Có dạng : `slice(beginIndex, endIndex)`

Trả về 1 mảng gồm các phần tử lấy từ vị trí index beginIndex đến endIndex(tính cả phần tử beginIndex nhưng không tính phần tử endIndex)

==> Sử dụng toán tử spread (dấu 3 chấm)

- Có 2 cách để tạo bản sao từ một array là sử dụng slice và toán tử spread.

### 2. Phương thức splice()

- Phương thức splice() thay đổi nội dung của một mảng bằng cách loại bỏ hoặc thay thế các phần tử hiện có và / hoặc thêm các phần tử mới vào vị trí.

- Khác với slice, mảng gốc bị sửa đổi.

==> Có dạng : `splice(start, deleteCount, item1, item2, ..,itemN)`
Trong đó, start là vị trí ta đang xét (để xóa, thêm hay thay đổi gì đó)
deleteCount : số phần tử xóa tính từ start (bao gồm cả phần tử start)
item1,item2,..,itemN : các phần tử thêm vào

==> return về 1 mảng các phần tử bị xóa

### 3. Phương thức reverse()

- Phương thức reverse() là phương thức dùng để đảo ngược một mảng.
- Phương thức reverse làm thay đổi mảng gốc.

==> Có dạng : `reverse()`

### 4. Phương thức concat()

- Phương thức concat () được sử dụng để hợp nhất hai hoặc nhiều mảng.

- Phương thức này không thay đổi các mảng hiện có mà thay vào đó trả về một mảng mới.

==> Có dạng : `concat(value0, value1, ... , valueN)`

Trong đó, value0,..valueN là các giá trị có thể làng mảng hoặc giá trị 1 phần tử để tiến hành nối mảng

### 5. Sử dụng toán tử spread (dấu ...) để nối các array

Có thể nối chuổi bằng toán tử 3 chấm (...) --> hiểu đơn giản như là việc bỏ dấu [] ra khỏi [1,2,3] . tức sẽ thành 1,2,3

### 6. Phương thức join()

- Phương thức join() tạo và trả về một chuỗi mới bằng cách nối tất cả các phần tử trong một mảng (hoặc một đối tượng giống mảng), được phân tách bằng dấu phẩy hoặc một chuỗi phân tách được chỉ định.

- Nếu mảng chỉ có một mục, thì mục đó sẽ được trả về mà không cần sử dụng dấu phân tách.

==> Có dang : `join(separator)`

Trong đó, separator : chính là 1 chuổi giúp phân cách các phần tử trong mảng

## III. Lặp mảng : forEach

`forEach(function(element, index, array) { /* ... */ }, thisArg)`

Thực thi 1 hàm nào đó trên từng phần tử của mảng

## IV. Các phương thức nâng cao

Một số phương thức nâng cao hơn hay dùng và rất mạnh mẽ trong JS như : map, filter, reduce

### 1. Phương thức map()

`map(function(element, index, array) { /* ... */ }, thisArg)`

- Phương thức map() tạo ra 1 mảng mới dựa trên mảng ban đầu (sẽ có số lượng phần tử bằng với số lượng phần tử của mảng ban đầu)

- Phương thức này về cơ bản hoạt động như sau : nó nhận đầu vào là 1 array, duyệt qua array và áp dụng 1 hàm callback lên từng phần tử của array đó, callback này sẽ trả về 1 giá trị nào đó và giá trị này sẽ được lưu vào 1 mảng mới, sau cùng mảng này sẽ được trả về

VD:

```
// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5];

// yêu cầu tạo ra 1 mảng mới với các phần tử là
// bình phương của các phần tử trong mảng arr

const newArr = arr.map(function (item) {
  return item * item;
});

console.log(newArr);

const newArr2 = arr.map((item) => item * item);
console.log(newArr2);

const newArr3 = arr.map(myCallBack);
console.log(newArr3);

function myCallBack(item) {
  return item * item;
}

// Mình làm cả 3 cách nhá , để hiểu rõ hơn về cách hoạt động của nó
```

### 2. Phương thức filter()

`filter(function(element, index, array) { /* ... */ }, thisArg)`

- Phương thức filter lọc một mảng để lấy ra các phần tử thỏa mãn một điều kiện nhất định.

- Tất cả các phần tử vượt qua bài kiểm tra sẽ được đặt trong một array mới.

VD:

```
// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// yêu cầu lấy ra các số chẳn có trong mảng

const newArr = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(newArr);

const newArr2 = arr.filter((item) => item % 2 === 0);
console.log(newArr2);

const newArr3 = arr.filter(myCallBack);
console.log(newArr3);

function myCallBack(item) {
  return item % 2 === 0;
}

// Mình làm cả 3 cách nhá , để hiểu rõ hơn về cách hoạt động của nó


```

### 3. Phương thức reduce()

`reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)`

- Phương thức reduce tổng hợp các giá trị của các phần tử thành một giá trị duy nhất dựa trên phép toán được truyền vào.

VD:

```
// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// yêu cầu tính tổng của các phần tử có trong mảng

// const total1 = arr.reduce(function (pre, cur) {
//   return pre + cur;
// });
// console.log(total1);

// const total2 = arr.reduce((pre, cur) => pre + cur);
// console.log(total2);

// const total3 = arr.reduce(myCallBack);
// console.log(total3);

// function myCallBack(pre, cur) {
//   return pre + cur;
// }

// Mình làm cả 3 cách nhá , để hiểu rõ hơn về cách hoạt động của nó

function callback(pre, cur, index) {
  console.table({
    "Đang chạy trên phần tử thứ : ": index,
    "Giá trị tích trữ được trước đó : ": pre,
    "Giá trị phần tử đang xét : ": cur,
    "Giá trị tích trữ mới : ": pre + cur,
  });

  return pre + cur;
}

arr.reduce(callback, 0);



<!-- function callback(pre, cur) {
  return pre + cur;
}
for (let i = 0; i < arr.length; i++) {
  total = callback(total, arr[i]);
}

console.log(total); -->
```

### 4. Kỹ thuật chaining Method

==> Là kết hợp các hàm với nhau để thực hiện theo thứ tự

## V. Tổng kết bài học

Trong bài học này, chúng ta đã học được các kiến thức sau:

- Xử lý, bóc tách array với loạt các phương thức như slice, splice, reverse, concat, join,…
- Lặp qua các phần tử trong array với cú pháp foreach.
- Kết hợp array với các xử lý phức tạp hơn thông qua các phương thức map, filter, reduce thay thế cho for và foreach.
- Áp dụng nhiều phương thức một lúc trên mảng bằng kỹ thuật chaining method.
