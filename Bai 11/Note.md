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

```

==> Kết luận về thay đổi giá trị nguyên thủy và Object ở trong hàm

- Truyền một biến primitive vào trong một hàm giống việc tạo một bản sao biến (đối số) được truyền vào ở bên ngoài hàm

- Khi truyền một object vào một function nó cũng giống như việc sao chép một Object bên ngoài, nếu trỏ tới một giá trị object trong bộ nhớ heap. Do đó khi thay đổi giá trị các thuộc tính, phương thức bên trong object đó thì thật sự Object bên ngoài cũng sẽ thay đổi theo (Vì sao ? --> Vì chúng cùng trỏ đến 1 vùng nhớ chứa giá trị object đó). Điều này dễ gây ra lỗi khi hai function cùng thao tác trên 1 object

VD:

```
code về 2 functon cùng thao tác trên 1 Object
```

==> Hiểu về 2 thuật ngữ truyền vào giá trị và truyền thao chiếu

Có 2 thuật ngữ được dùng khi truyền thao số cho function là:

- Truyền vào giá trị (pass by value) :JS có điều này
- Truyền vào tham chiếu (pass by reference) : JS không có

## III. First-Class Function và Higher-Order Function :

### 1. Thế nào là first-class function :

- JS là ngôn ngữ có các first-class function, có nghĩa là các function được coi như là các giá trị
- Các function là một loại object đặc biệt trong JS, coi các function là các giá trị nên có thể :

1. Lưu trữ function trong các biến hoặc các thuộc tính của object
2. Truyền các function làm đối số cho các function khác (Ví dụ addEventListener() trong DOM )
3. Return - trả về 1 function từ 1 funtion khác
4. Gọi phương thức trong function : vd , function nào cũng có thuộc tính `.name` hay cũng có các phương thức như `.apply , .bind , .call`

### 2. Higher-Order-Function là gì ?

Một hàm mà lấy các hàm khác làm đối số hoặc trả về 1 hàm khác , hoặc là có cả 2 đặc tính đó thì được gọi là Higher-Order-Function

1. Function là một đối số truyền vào function khác: Function này thường được gọi là callback function, callback function sẽ được gọi sau bởi higher order function

2. Function trả về một function khác (sẽ đề cập ở phía sau)

===> Tóm lại :
Ta hiểu nôm na thế này :

- First-Class function là 1 tính năng của JS
- Còn Higher Order Function tồn tại vì nó được xây dựng trên first class function (nếu 1 ngôn ngữ không có first class function thì sẽ không có cái gọi là Higher Order Function , VD: C,C++,JAVA, ... làm gì có cái gọi là Higher Order Function )

## IV.Các hàm nhận hàm Callback

VD:

```
cho 1 ví dụ về callback
```

==> Thuộc tính name

==> Tại sao hàm callback lại hữu ích và trở nên thông dụng

- Giúp dể dàng phân tách hoặc viết code thành nhiều phần có thể tái sử dụng và kết nối với nhau

- Tạo ra sự trừu tượng, ẩn chi tiết của một số code được thực thi bởi vì chúng ta không thực sự quan tâm đến những chi tiết đó.

VD: hàm addEventListener(): có callback truyền vào sẽ được thực thi (tức hàm addEventListener này gọi bên trong code của nó để thực thi khi sự kiện xảy ra ==> Nhưng chúng ta có cần biết bên trong hàm addEventListener này nó thực hiện cái j và code ra sao không ? ==> Không cần đúng không ? đó là tiêu biểu cho việc trừu tượng và ẩn chi tiết của một số code được thực thị khi chúng ta không cần thực sự quan tâm đến những chi tiết ấy).

## V. Hàm trả về hàm

VD:

```
Viết 1 ví dụ về hàm trả về hàm
```

## VI. Phương thức call và apply

VD:

```
Viết ví dụ
```

## VII. Phương thức bind

## VIII. Closures

## IX. Tổng kết

Trong bài học này chũng ta đi sâu vào nghiên cứu các khía cạnh nâng cao về hàm , và nó rất quan trọng cần nắm rõ để có thể code được những dự án, bài tập phức tạp, và việc nắm rõ cũng sẽ giúp chúng ta có thể dể dàng tìm bug hay debug một cách dể dàng hơn khi gặp lỗi
==> Do đó, cần nắm rõ những kiến thức trọng tâm sau :

- Sự khác biệt giữa việc truyền vào object/dữ liệu nguyên thủy làm tham số cho hàm.

- Khái niệm và cách sử dụng cụ thể cho First-Class Function và Higher-Order Function.

- Định nghĩa hàm callback – hàm thông dụng nhất được sử dụng trong JS.

- Ứng dụng hàm trả về hàm.

- Các phương thức nâng cao cho hàm như call, apply, bind cũng như hoàn cảnh sử dụng cụ thể.

- Hiểu và vận dụng và giải thích được closure
