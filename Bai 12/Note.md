# Bài 12 - Làm việc với Mảng

## I. Giới thiệu

Mở rộng các kiến thức đã học được về array ở bài 4, trong bài học này, chúng ta sẽ tìm hiểu về:

- Các phương thức xử lý array, từ đơn giản đến phức tạp.
- Sử dụng vòng lặp ở trong array.
- Ứng dụng xử lý array vào project quản lý tài khoản ngân hàng.

## II. Các phương thức xử lý mảng đơn giản

==> <b>Tại sao array lại có phương thức ?</b>

- Phương thức là các hàm mà chũng ta có thể gọi trên các đối tượng. Bản thân array là một đối tượng đặc biệt nên nó cũng có các phương thức (các hàm được gắn vào array)--> chúng ta sẽ còn hiểu sâu hơn nữa là tại sao 1 array chũng ta khai báo ra không có định nghĩa các phương thức ấy mà sao chũng ta có thể gọi được phương thức ấy trên chính array của chúng ta ==> sau khi tìm hiểu về bài OOP - kế thừa nguyên mẫu chúng ta sẽ có câu trả lời !

==> OK bây giờ ta sẽ đi vào một số các phương thức thông dụng của array hay dùng

### 1. Phương thwucs slice()

### 2. Phương thức splice()

### 3. Phương thức reverse()

### 4. Phương thức concat()

### 5. Sử dụng toán tử spread (dấu ...) để nối các array

### 6. Phương thức join()

## III. Lặp mảng : forEach

LƯU Ý : ==> Đối với vòng lặp foreach, các câu lệnh continue và break không hoạt động, foreach sẽ luôn lặp lại trên toàn bộ array.

## IV. Các phương thức nâng cao

Một số phương thức nâng cao hơn hay dùng và rất mạnh mẽ trong JS như : map, filter, reduce

### 1. Phương thức map()

- Phương thức map() tạo ra 1 mảng mới dựa trên mảng bao đầu (sẽ có số lượng phần tử bằng với số lượng phần tử của mảng ban đầu)

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

- Phương thức filter lọc một mảng để lấy ra các phần tử thỏa mãn một điều kiện nhất định.

- Tất cả các phần tử vượt qua bài kiểm tra sẽ được đặt trong một array mới.

VD:

```
// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// yêu cầu lấy ra các số chẳn có trong mảng

const newArr = arr.filter(function (item) {
  if (item % 2 === 0) return item;
});

console.log(newArr);

const newArr2 = arr.filter((item) => item % 2 === 0);
console.log(newArr2);

const newArr3 = arr.filter(myCallBack);
console.log(newArr3);

function myCallBack(item) {
  if (item % 2 === 0) return item;
}

// Mình làm cả 3 cách nhá , để hiểu rõ hơn về cách hoạt động của nó

```

### 3. Phương thức reduce()

- Phương thức reduce tổng hợp các giá trị của các phần tử thành một giá trị duy nhất dựa trên phép toán được truyền vào.

VD:

```
// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// yêu cầu tính tổng của các phần tử có trong mảng

const total1 = arr.reduce(function (pre, cur) {
  return pre + cur;
});
console.log(total1);

const total2 = arr.reduce((pre, cur) => pre + cur);
console.log(total2);

const total3 = arr.reduce(myCallBack);
console.log(total3);

function myCallBack(pre, cur) {
  return pre + cur;
}

// Mình làm cả 3 cách nhá , để hiểu rõ hơn về cách hoạt động của nó

```

### 4. Kỹ thuật chaining Method

## V. Tổng kết bài học

Trong bài học này, chúng ta đã học được các kiến thức sau:

- Xử lý, bóc tách array với loạt các phương thức như slice, splice, reverse, concat, join,…
- Lặp qua các phần tử trong array với cú pháp foreach.
- Kết hợp array với các xử lý phức tạp hơn thông qua các phương thức map, filter, reduce thay thế cho for và foreach.
- Áp dụng nhiều phương thức một lúc trên mảng theo kiểu pipeline.
