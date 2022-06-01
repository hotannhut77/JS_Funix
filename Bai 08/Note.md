# Bài 8 - DOM and Event - Phần 2

## I. Giới thiệu

Nối tiếp những gì đã học ở bài 7, trong bài học này chúng ta sẽ tìm hiểu thêm về các thuộc tính và phương thức của DOM

## II.Một số kiến thức về thao tác DOM cần nắm

### 1. Nhắc lại về cách chọn các phần tử HTML

Ở bài trước chúng ta đã giới thiệu qua bài này, ở bài này chúng ta sẽ nhắc lại 2 phương thức hay sử dụng nhất để chọn các phần tử HTML đó là

- document.querrySelector : trả về phần tử xuất hiện đầu tiên trong tài liệu HTML thỏa điều kiện selector đưa vào
- document.querrySelectorAll : trả về 1 danh sách NodeList là 1 mảng TẤT CẢ các phần tử thỏa mảng điều kiện selector đưa vào . Do là 1 danh sách nên sau khi chọn ra được danh sách các phần tử, để thao tác trên từng phần tử ta sẽ dùng vòng lặp (VD: vòng lặp `for`) để duyệt qua mảng danh sách các phần tử và xử lý thao tác việc gì đó trên từng phần tử

### 2. Thuộc tính className :

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .nav-2 {
        color: blue;
      }

      .nav-3 {
        background-color: bisque;
        color: rgb(241, 18, 18);
      }
    </style>
  </head>
  <body>
    <ul class="nav nav-main">
      <li>Trang chủ</li>
      <li>Giới thiệu</li>
      <li>Liên hệ</li>
    </ul>

    <script>
      const ulEl = document.querySelector("ul");
      console.log(ulEl.className);
      // ulEl.className += " nav-2";
      ulEl.className = "nav nav-3";
      console.log(ulEl.className);
    </script>
  </body>
</html>


```

Thuộc tính `className` này dùng để trả về 1 danh sách tên các class của phân tử (element) cách nhau bở dấu cách . (NHỚ LÀ 1 DANH SÁCH CÁC CLASS nhá !)

Dùng thuộc tính này, ta có thể:

- Gán thêm class cho phần tử
- Ghi đè lại toàn bộ các class của phần tử
- Truy xuất (đọc giá trị) các class của phần tử

### 3.Thuộc tính `classList`:

Đây là 1 thuộc tính rất quan trọng và hay sử dụng nhất trong DOM

Đây là 1 thuộc tính giúp trả về danh sách các class của phần tử.

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .nav-2 {
        color: blue;
      }

      .nav-3 {
        background-color: bisque;
        color: rgb(241, 18, 18);
      }
    </style>
  </head>
  <body>
    <ul class="nav nav-main">
      <li>Trang chủ</li>
      <li>Giới thiệu</li>
      <li>Liên hệ</li>
    </ul>

    <script>
      const ulEl = document.querySelector("ul");
      console.log(ulEl.classList);

      // dùng for để duyệt qua danh sách
      for (let i = 0; i < ulEl.classList.length; i++) {
        console.log(ulEl.classList[i]);
      }
    </script>
  </body>
</html>

```

==> <b>Một số thao tác với classList</b>

1. `classList.add()`
   Phương thức này dùng để thêm 1 hoặc nhiều class CSS (các tham số - tên class là dạng string cách nhau bởi dấu phẩy) vào danh sách classList các class của phần tử

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .nav-2 {
        color: blue;
      }

      .nav-3 {
        background-color: bisque;
        color: rgb(241, 18, 18);
      }
    </style>
  </head>
  <body>
    <ul class="nav nav-main">
      <li>Trang chủ</li>
      <li>Giới thiệu</li>
      <li>Liên hệ</li>
    </ul>

    <script>
      const ulEl = document.querySelector("ul");

      ulEl.classList.add("nav-2","nav-3");

      console.log(ulEl.classList);
    </script>
  </body>
</html>

```

2. `classList.replace()`
   Phương thức này dùng để thay thế 1 class ĐÃ TỒN TẠI bằng 1 class mới

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .nav-2 {
        color: blue;
      }

      .nav-3 {
        background-color: bisque;
        color: rgb(241, 18, 18);
      }

      .ok {
        background-color: blueviolet;
        color: yellow;
      }
    </style>
  </head>
  <body>
    <ul class="nav nav-main">
      <li>Trang chủ</li>
      <li>Giới thiệu</li>
      <li>Liên hệ</li>
    </ul>

    <script>
      const ulEl = document.querySelector("ul");

      ulEl.classList.add("nav-2", "nav-3");

      document.addEventListener("click", function () {
        // thay thế class `nav-3` bằng class `ok`
        ulEl.classList.replace("nav-3", "ok");
      });
    </script>
  </body>
</html>
```

3. `classList.remove()`:

Phương thức này dùng để đi 1 hoặc nhiều class nào đó có trong classList danh sách các class CSS của phần tử

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .nav-2 {
        color: blue;
      }

      .nav-3 {
        background-color: bisque;
        color: rgb(241, 18, 18);
      }

      .ok {
        background-color: blueviolet;
        color: yellow;
      }
    </style>
  </head>
  <body>
    <ul class="nav nav-main">
      <li>Trang chủ</li>
      <li>Giới thiệu</li>
      <li>Liên hệ</li>
    </ul>

    <script>
      const ulEl = document.querySelector("ul");

      ulEl.classList.add("nav-2", "nav-3");

      document.addEventListener("click", function () {
        // xóa đi class 'nav' và class 'nav-main'
        ulEl.classList.remove("nav", "nav-main");
      });
    </script>
  </body>
</html>


```

4. `classList.contains()`

Phương thức này để kiểm tra xem phần tử có 1 class CSS nào đó hay không ? Nếu có trả về 'true', ngược lại không có thì trả về 'false'

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .nav-2 {
        color: blue;
      }

      .nav-3 {
        background-color: bisque;
        color: rgb(241, 18, 18);
      }

      .ok {
        background-color: blueviolet;
        color: yellow;
      }
    </style>
  </head>
  <body>
    <ul class="nav nav-main">
      <li>Trang chủ</li>
      <li>Giới thiệu</li>
      <li>Liên hệ</li>
    </ul>

    <script>
      const ulEl = document.querySelector("ul");

      ulEl.classList.add("nav-2", "nav-3");

      console.log(ulEl.classList.contains("nav")); // true
      console.log(ulEl.classList.contains("nav2")); // false


    </script>
  </body>
</html>

```

5. `classList.toggle()`

Phương thức này hoạt động như sau : Nó sẽ kiểm tra xem phần tử có chứa class name chỉ định (tên class là tham số đưa vào) hay không, nếu có chứa rồi thì tiến hành xóa nó đi, còn nếu chưa có thì tiến hành thêm nó vào .

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .nav {
        list-style-type: none;
      }

      .nav-main {
        font-size: 25px;
      }

      .ok {
        background-color: blueviolet;
        color: yellow;
      }

      .non-visible {
        display: none;
      }

      button {
        width: 100px;
        height: 50px;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <div>
      <ul class="nav nav-main ok">
        <li>Trang chủ</li>
        <li>Giới thiệu</li>
        <li>Liên hệ</li>
      </ul>
    </div>

    <button>ẨN</button>

    <script>
      const divEL = document.querySelector("div");
      const btnEL = document.querySelector("button");

      btnEL.onclick = function () {
        divEL.classList.toggle("non-visible");
        if (divEL.classList.contains("non-visible") === true) {
          btnEL.textContent = "HIỆN";
        } else {
          btnEL.textContent = "ẨN";
        }
      };
    </script>
  </body>
</html>

```

VD2:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
      }
      #hinhTron {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: red;
      }

      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="hinhTron" class="hidden"></div>

    <script>
      setInterval(function () {
        document.getElementById("hinhTron").classList.toggle("hidden");
      }, 300);
    </script>
  </body>
</html>

```

## III. Xử lý sự kiện bàn phím

- Global Event là các event xảy ra không trên 1 phần tử HTML cụ thể nào .
  ==> keyboard event là 1 global event

- Và đối với các global event chúng ta thường xử lý trên toàn bộ document (tức là trên đối tượng document)

<b>Các sự kiện keyboard event :</b>

- keydown : là sự kiện xảy ra khi vừa nhấn phím xuống
- keyup : là sự kiện xảy ra khi ta nhấc ngón tay khỏi phím
- keypress : là sự kiện được giữ liên tục khi giữ ngón tay trên 1 phím nhất định

<b>Cách xác định ấn vào phím nào bằng thuộc tính `.key`</b>

==> Lưu ý , trong hàm sử lý sự kiện, nếu ta khai báo tham số, thì tham số đầu tiên luôn luôn đại diện cho đối tượng event, mô tả về sự kiện (ta tường đặt tham số đó là e )==> từ tham số này ta có thể biết được 1 sô đặc điểm của sự kiện từ đó sử lý dể dàng hơn

VD:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      .block {
        display: block;
      }

      .none {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="main" class="block">
      <p>Ví dụ về sử lý sự kiện bàn phím</p>
      <p>Ví dụ về sử lý sự kiện bàn phím</p>
      <p>Ví dụ về sử lý sự kiện bàn phím</p>
      <p>Ví dụ về sử lý sự kiện bàn phím</p>
      <p>Ví dụ về sử lý sự kiện bàn phím</p>
    </div>

    <script>
      const divEl = document.getElementById("main");
      document.addEventListener("keydown", function (e) {
        console.log(e.key);
        if (e.key === "Enter") {
          divEl.classList.remove("none");
          divEl.classList.add("block");

          // divEl.classList.replace("none", "block");
        } else if (e.key === "Escape") {
          divEl.classList.remove("block");
          divEl.classList.add("none");

          // divEl.classList.replace("block", "none");
        }
      });
    </script>
  </body>
</html>

```

## IV. Tổng kết :

Ở bài này, chúng ta học thêm được mốt số kiến thức sau về DOM

- Thao tác với classList của phần tử
- Sử lý sự kiện bàn phím, thế nào là sự kiện global
- Qua bài lab 8 chúng ta sẽ áp dụng trực tiếp các kiến thức vào project cụ thể

## V. Lab 8 - Cửa sổ modal

Trong bài lab này, chúng ta hãy cùng nhau viết lại toàn bộ phần code cho project cửa sổ modal thông qua nội dung bài học ở các video từ 79 => 81.

Kết quả cuối cùng Project sẽ là 1 màn hình chuyển trạng thái nho nhỏ với đầy đủ các chức năng:

Mô tả các chức năng của project
(đây là 1 project khá đơn giản, mục đích để kiểm tra xem khả năng thao tác với classList cũng như xử lý sự kiện bàn phím, hay sự kiện click) Như sau : .....

Một số lưu ý :

- Khi làm chúng ta nên đọc qua 2 file .html và .css để có thể hiểu và dình dung được các thành phần HTML và css liên kết với nhau như thế nào, hiểu được các sự kiện cần thực hiện và xử lý những gì để code dể dàng .
