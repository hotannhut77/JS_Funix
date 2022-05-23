# Bài 7 - DOM and Event - Phần 1 (Cực quan trọng)

## I. Giới thiệu :

- Với lập trình web, kiến thức về DOM và khả năng thao tác DOM là hai yếu tố quan trọng nhất. DOM cho bạn khả năng thay đổi mọi thứ của trang web, khi mà mọi nội dung đều có thể được thêm bớt xóa sửa để mang lại trải nghiệm và nội dung tốt nhất.

- Và Javascript là một ngôn ngữ được sử dụng trên các Browser nên nó đóng một vai trò quan trọng trong các website. Javascript thao tác với tài liệu HTML kết hợp với phương thức của nó tạo nên các trải nghiệm thân thiện với người dùng trên web. Để thao tác được với các thẻ HTML thì Javascript phải thông qua một mô hình ta gọi là DOM.

==> Trong bài học này, chúng ta sẽ tìm hiểu về JS trong lập trình web:

- Giới thiệu về DOM
- Các thuộc tính và phương thức của DOM
- Áp dụng nguyên tắc dry vào lặp trình JS

## II. Demo một số ứng dụng nhỏ có dùng đến DOM

- Ứng dụng trò chơi đoán số
- Ứng dụng trò chơi tung xúc sắc

  ...

## III. DOM và DOM Manipulation (thao tác) là gì ?

### 1. Định nghĩa DOM

- DOM (viết tắc của Document Object Model) là 1 biễu diễn có cấu trúc (dạng cây) của tài liệu HTML

- DOM cho phép chúng ta sử dụng JS để truy cập vào các phần tử và style (CSS) để sử dụng chúng. Nói cách DOM giống như 1 điểm kết nối giữa tài liệu HTML và code JS của chúng ta.

<img src = "./imgs/hinh1.png">

- DOM được trình duyệt web tạo tự động ngay sau khi tải trang HTML về, và nó được lưu trữ dưới dạng cây DOM ??? Như thế nào ? Ok qua ví dụ sau mình sẽ giải thích chi tiết hơn

==> Tóm lại, DOM có các nhiệm vụ cơ bản sau :

- Cho phép truy cập đến các thẻ html
- Thay đổi các thuộc tín của thẻ html
- Thay đổi css của các thẻ html (style)
- Tạo, thêm, xóa các thẻ html

### 2. Cây cấu trúc DOM

<img width = "500px" src = "https://topdev.vn/blog/wp-content/uploads/2021/01/dom-la-gi.gif">

code HTML :

```
<html>
  <head>
    <title>My title</title>
  </head>
  <body>
    <!-- commnet -->
    <a href="">My link</a>
    <h1>My header</h1>
  </body>
</html>


```

- Trong cây DOM, mỗi phần tử HTML là 1 object hay còn gọi là 1 node.

- Document là object đầu tiên ( hay còn gọi là root) của cây DOM, nó là điểm truy cập của cây DOM.

- Phần tử con tiếp theo thường là html và nó tieeos tục có 2 phần tử con là head và body (2 phần tử này là 2 phần tử liền kề, anh em).

- Đi tiếp xuống dưới ta sẽ thấy nhiều các phần tử html lồng nhau và chúng được biểu diễn trong cây DOM

- Cây DOM không chỉ có các node phần tử (element) mà còn có các node cho text, command, ... Tất cả những thứ có trong tài liệu HTML đều được biểu diễn trong DOM.

==> Lưu ý : về quan hệ giữa DOM với JS và trình duyệt web
DOM và các phương thức của phần tử DOM là 1 phần của WEB API (là các thư viện viết bằng JS mà trình duyệt triển khai mà chúng ta có thể truy cặp từ code JS) - chúng ta sẽ hiểu rõ về WEB API ở các bài sau.

<img src = "./imgs/hinh3.png">

### 3. Lựa chọn và thao tác các element

==> Để lựa chọn 1 element nào đó trong cây DOM ta có thể dùng các phương thức sau :

1. querySelector('điều kiện selector')
   Chọn ra 1 phần tử đầu tiên thỏa điều kiện selector đưa vào
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
    <h1>Bài 5</h1>
    <p>Đoạn văn thứ 1</p>
    <p>Đoạn văn thứ 2</p>
    <div>
      <p>Đoạn văn thứ 3</p>
      <p>Đoạn văn thứ 4</p>
      <p class="note">Đoạn văn thứ 5</p>
    </div>

    <p class="note">Đoạn văn thứ 6</p>

    <p id="myId">Đoạn văn thứ 7</p>

    <script>
      "use strict";

      const pEl1 = document.querySelector("p");
      console.log(pEl1);
      pEl1.style.color = "red";

      const pEl3 = document.querySelector("div p");
      console.log(pEl3);
      pEl3.style.color = "blue";

      const pEl5 = document.querySelector(".note");
      pEl5.style.color = "green";
      console.log(pEl5);

      const pEl7 = document.querySelector("#myId");
      pEl7.style.color = "#aaa";
      console.log(pEl7);
    </script>
  </body>
</html>


```

2. querySelectorAll('điều kiện selector')
   Chọn tất cả các phần tử thỏa điều kiện slector đưa vào

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
    <h1>Bài 5</h1>
    <p>Đoạn văn thứ 1</p>
    <p>Đoạn văn thứ 2</p>
    <div>
      <p>Đoạn văn thứ 3</p>
      <p>Đoạn văn thứ 4</p>
      <p class="note">Đoạn văn thứ 5</p>
    </div>

    <p class="note">Đoạn văn thứ 6</p>

    <p id="myId">Đoạn văn thứ 7</p>

    <script>
      "use strict";

      // sẽ trả về 1 NodeList (danh sách các node - các element)
      const pElList = document.querySelectorAll("p");
      console.log(pElList);

      for (let i = 0; i < pElList.length; i++) {
        console.log(pElList[i].textContent);
      }
    </script>
  </body>
</html>

```

3. getElementById('tên của id')
   Chọn phần tử có id nào đó được đưa vào

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
    <h1>Bài 5</h1>
    <p>Đoạn văn thứ 1</p>
    <p>Đoạn văn thứ 2</p>
    <div>
      <p>Đoạn văn thứ 3</p>
      <p>Đoạn văn thứ 4</p>
      <p class="note">Đoạn văn thứ 5</p>
    </div>

    <p class="note">Đoạn văn thứ 6</p>

    <p id="myId">Đoạn văn thứ 7</p>

    <script>
      "use strict";

      const pEl = document.getElementById("myId");
      console.log(pEl);
      console.log(pEl.innerHTML);
    </script>
  </body>
</html>

```

4. getElementsByClassName('tên class')

   Chọn tất cả các phần tử có class đưa vào

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
    <h1>Bài 5</h1>
    <p>Đoạn văn thứ 1</p>
    <p>Đoạn văn thứ 2</p>
    <div>
      <p>Đoạn văn thứ 3</p>
      <p>Đoạn văn thứ 4</p>
      <p class="note">Đoạn văn thứ 5</p>
    </div>

    <p class="note">Đoạn văn thứ 6</p>

    <p id="myId">Đoạn văn thứ 7</p>

    <script>
      "use strict";

      // sẽ trả về 1 HTMLCollection - bộ sưu tập các phần tử
      const pEls = document.getElementsByClassName("note");
      console.log(pEls);

      for (let i = 0; i < pEls.length; i++) {
        console.log(pEls[i]);
        console.log(pEls[i].innerHTML);
      }
    </script>
  </body>
</html>

```

5. getElementsByTagName('đưa vào tên của thẻ')

   Chọn tất cả các phần tử có tên thẻ trùng với tên thẻ đưa vào

6. getElementsByName('đưa vào name của thẻ')

   Chọn tất cả các phần tử có attribute 'name' với tên được đưa vào

==> Một số các thuộc tính cần nắm

1. innerHTML
2. textContent
3. value

### 4. Thao tác với CSS Style

Thông qua DOM, chúng ta cũng có thể code CSS style cho các phần tử mà chúng ta muốn

### 5. Xử lý sự kiện click (click Events)

==> Khái niệm về Event và EventListener

- Event là những sự kiện xảy ra trên trang như click chuột, di chuột, bấm phím,...
- EventListener là việc lắng nghe sự kiện xảy ra và phản hồi nó , VD: sau khi nguowicf dùng click chuột vào phím xóa thú thú cưng thì tiến hành xóa thú cưng đó và thông báo đã xóa thành công chẳn hạn !

==> Có 2 cách chính để bắt và xử lý sự kiện :

1. Cách 1 : DOM Events

1.1 Thêm Attribute events vào chính thẻ HTML

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
    <button id="btn" onclick="showHello()">Click here !!!</button>

    <script>
      "use strict";

      function showHello() {
        alert("Xin chào mọi người , tôi là HTN !");
      }
    </script>
  </body>
</html>

```

1.2 Sử dụng element node để gọi đến attribute events và gán giá trị cho nó

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
    <button id="btn">Click here !!!</button>

    <script>
      "use strict";

      const btnEl = document.getElementById("btn");

      btnEl.onclick = function () {
        alert("Xin chào mọi người , tôi là HTN !");
      };
    </script>
  </body>
</html>

```
