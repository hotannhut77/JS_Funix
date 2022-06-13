# Bài 13 - Advance DOM and Event

## I. Giới thiệu

Mở rộng các kiến thức đã học được về DOM ở phần 2, trong bài học này, chúng ta sẽ tìm hiểu về:

- Cấu trúc của DOM.
- Sử dụng DOM để thay đổi các attributes trong HTML và CSS.
- Sử dụng DOM để tác động vào các event.

## II. DOM thực sự hoạt động thế nào

### 1. DOM là gì ?

- DOM là một điểm kết nối giữa code JS với tài liệu HTML được hiển thị bởi trình duyệt

- JS tương tác với trình duyệt thông qua DOM , JS có thể:

==> Tạo , sữa đổi, xóa các phần tử trong DOM

==> Đặt style,class,attribute, eventListener và phản hồi event

- DOM là một api, nó là interface (giao diện) được cung cấp để tương tác một các có cấu trúc với DOM Tree bao gồm nhiều phương thức (như querySelector, addEventListener, createElement, ...) và thuộc tính (như innerHTML, textContent, ...)

- Tất cả các thuộc tính và phương thức của DOM được tổ chức thành các loại object khác nhau.

### 2. API DOM được cấu trúc như thế nào

- Mỗi node đơn trong DOM tree là một kiểu node, được biểu diễn bởi 1 đối tượng.

- Mỗi đối tượng có các phương thức và thuộc tính nhất định.

- Có một số kiểu node: Element, Text, Comment, Document.

==> Đứa ví dụ về các loại node

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
    <h1>
      <!-- comment -->
      Bài 13
    </h1>
    <script>
      const h1El = document.querySelector("h1");
      console.log(h1El);

      console.log(document.childNodes);

      console.dir(h1El.childNodes);
    </script>
  </body>
</html>

```

### 3. Khái niệm kế thừa

- Tính kế thừa là tất cả các node con sẽ có quyền truy cập vào các phương thức, thuộc tính của tất cả các node cha.

- API Dom được chia thành các kiểu node khác nhau, mỗi node có quyền truy cập vào các thuộc tính và phương thức khác nhau và chúng cũng được kế thừa nhiều thuộc tính từ tổ tiên của chúng.

### 4. Document node

- Document mà chúng ta sử dụng mọi lúc trong thao tác DOM thực chất chỉ là một loại node, chứa các phương thức quan trọng, chẳng hạn như querySelector, createElement và getElementById.

- Lưu ý các querySelector có sẵn trên cả document và element.

### 5. EventTarget node

- Api DOM cần một cách cho phép tất cả các loại node lắng nghe sự kiện, để làm điều này ta hay gọi phương thức addEventListener trên element hoặc document.

- Vì addEventListener là một phương thức của EventTarget - node cha của Node và Window, nên có thể gọi phương thức này trên mọi node dựa trên cơ chế kế thừa.

## III. Chọn, tạo và xóa các element

### 1. Các câu lệnh chọn

- Câu lệnh document.documentElement: lấy ra các phần tử trong document.

- Câu lệnh document.head lấy ra phần head của document (phần không hiển thị).

- Câu lệnh document.body lấy ra phần body của document (phần nội dung chưa html để hiển thị ra trình duyệt).

- Câu lệnh document.querySelector() lấy ra phần tử đầu tiên dựa vào id hoặc class.

- Câu lệnh document.querySelectorAll() lấy ra tất cả các phần tử phù hợp với điều kiện chọn.

- Câu lệnh document.getElementById() lấy ra các phần tử dựa vào id.

- Câu lệnh document.getElementsByTagName() lấy ra các phần tử dựa vào tag.

- Câu lệnh document.getElementsByClassName() lấy ra các phần tử theo class.

`Lưu ý : Htlm collection và node list`

- HTML Collection là một tập hợp các node động, nếu DOM thay đổi thì collection này cũng ngay lập tức được cập nhật tự động.

- NodeList không được cập nhật khi DOM thay đổi, vì NodeList được tạo ra vào thời điểm khi DOM chưa thay đổi là luôn nhận giá trị đó.

VD

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
    <p>đoạn văn 1</p>
    <p>đoạn văn 2</p>
    <p>đoạn văn 3</p>
    <p>đoạn văn 4</p>
    <script>
      // node list
      const pNodeList = document.querySelectorAll("p");
      // HTML Collection
      const pHTMLCollection = document.getElementsByTagName("p");

      const p5El = document.createElement("p");
      p5El.textContent = "đoạn văn 5";
      document.body.appendChild(p5El);

      console.log(pHTMLCollection);
      console.log(pNodeList);
    </script>
  </body>
</html>

```

### 2. Phương thức creatElement để tạo element

- Sử dụng document.createElement() để tạo một phần tử mới, nhưng phần tử này chưa được hiển thị trên DOM.

- Tiếp tục gán các giá trị cần thiết như classList.add(), textContent và innerHTML.

Để phần tử có thể hiển thị trên DOM chúng ta phải gán nó vào một phần tử có sẵn :

- Phương thức .prepend() thêm vào đầu phần tử, phần tử con đầu tiên.

- Phương thức .append() thêm vào sau phần tử, phần tử con cuối cùng.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .myClass {
        color: red;
      }
    </style>
  </head>
  <body>
    <ol>
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
    </ol>
    <script>
      const olEl = document.querySelector("ol");
      // // cách 1 để tạo thêm các phần tử
      // olEl.innerHTML += `<li>Mục 4</li>`;
      // olEl.innerHTML = `<li>Mục 0</li>` + olEl.innerHTML;

      // cách 2 : dùng
      const liEl = document.createElement("li");
      // thêm nội dung text cho phần tử
      liEl.textContent = "Mục X";
      // thêm class cho phần tử
      liEl.classList.add("myClass");

      // thêm cuối : phần tử con cuối cùng của olEl
      olEl.append(liEl);
      // thêm đầu : phần tử con đầu tiên của olEl
      olEl.prepend(liEl);

      // thêm :
      // di chuyển các phần tử lên đầu , ứng dụng prepend và append
      olEl.querySelectorAll("li").forEach(function (liItem) {
        liItem.onclick = function () {
          olEl.prepend(this);
          this.style.backgroundColor = "green";
        };
      });
    </script>
  </body>
</html>

```

### 3. Phương thức `before` và `after`:

- before() chèn vào trước phần tử.

- after() chèn vào sau phần tử.

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
      .myClass {
        color: red;
      }
    </style>
  </head>
  <body>
    <ol>
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
    </ol>

    <h1>Bài 13</h1>
    <script>
      const h1El = document.querySelector("h1");
      const li1El = document.querySelector("li");

      h1El.before(li1El);
      h1El.after(li1El);
    </script>
  </body>
</html>

```

### 4. Xóa element với phương thức remove và parentElement.removeChild

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .myClass {
        color: red;
      }
    </style>
  </head>
  <body>
    <ol>
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
    </ol>

    <h1>Bài 13</h1>

    <button id="btn-delete">Xóa</button>
    <script>
      document
        .getElementById("btn-delete")
        .addEventListener("click", function () {
          // document.querySelector("h1").remove();
          const ele = document.body.removeChild(
            document.body.firstElementChild
          );

          console.log(ele);
        });
    </script>
  </body>
</html>

```

## IV. Style, Attribute và Class

### 1. Style

Để truy xuất 1 attribute css của 1 phần tử, thì trước đây, ta đã học 1 cách là dùng : Cú pháp `element.style.attribute`, attribute là các thuộc tính style CSS của phần tử, viết ở dạng camelCase.

Ví dụ: document.createElement('div').style.backgroundColor = '#37383d';

### 2. Attribute trong html

Có 2 loại attribute trong HTMl là:

- Attribute tiêu chuẩn, có sẵn trong phần tử: src, class, id, ... có thể lấy giá trị dễ dàng theo cú pháp element.attribute.

- Attribute không theo tiêu chuẩn: do lập trình viên định nghĩa, không thể lấy được giá trị ra theo cách thông thường.

Cách thông thường ta từng làm là như thế nào :
theo cú pháp `element.attribute`, ví dụ : `h1El.id`
Tuy nhiên, cách này không thể truy cập được các thuộc tính html do ta tự định nghĩa
Thay vào đó, ta có thể sử dụng 2 thuộc tính `getAttribute()` và `setAttribute()` để lấy giá trị attribute hoặc đặt lại giá trị, tạo mới thêm attribute cho phần tử của chúng ta

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
    <ol>
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
    </ol>

    <h1 id="heading" myData="Hello">Bài 13</h1>

    <button id="btn-delete">Xóa</button>
    <script>
      const h1El = document.querySelector("h1");
      console.log(h1El.myData); // undefined
      console.log(h1El.getAttribute("myData")); // Hello

      h1El.setAttribute("myData", "New Value");
      console.log(h1El.getAttribute("myData")); // New Value
    </script>
  </body>
</html>

```

`Data attribute :`

- Data attribute là một loại attribute đặc biệt bắt đầu bằng "data-", giá trị của các attribute này luôn được lưu trữ trong thuộc tính đối tượng dataset.

- Data attribute được sử dụng nhiều khi chúng ta làm việc với giao diện người dùng và đặc biệt khi cần lưu trữ dữ liệu trong HTML code.

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
    <ol>
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
    </ol>

    <h1 id="heading" data-number-heading="1">Bài 13</h1>

    <button id="btn-delete">Xóa</button>
    <script>
      const h1El = document.querySelector("h1");
      console.log(h1El.dataset);
      console.log(h1El.dataset.numberHeading);
    </script>
  </body>
</html>

```

VD: 1 ứng dụng của dataset

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      td,
      th {
        width: 70px;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>

    <script>
      const petArr = [
        {
          id: "P001",
          name: "Lucky",
        },
        {
          id: "P002",
          name: "Milu",
        },
        {
          id: "P003",
          name: "Lucky2",
        },
        {
          id: "P004",
          name: "Milu2",
        },
      ];

      const tBodyEl = document.querySelector("tbody");

      randerTableData(petArr);
      function randerTableData(dataArr) {
        tBodyEl.innerHTML = "";
        let html = "";
        dataArr.forEach(function (item) {
          html += `
            <tr>
              <td> ${item.id}</td>
              <td> ${item.name}</td>
              <td><button data-pet-id = '${item.id}'>Delele</button></td>
            </tr>
          `;
        });

        tBodyEl.innerHTML = html;

        document.querySelectorAll("button").forEach(function (deleteBtn) {
          deleteBtn.onclick = function () {
            console.log(this.dataset);
            petArr.forEach((pet, index) => {
              if (pet.id === this.dataset.petId) {
                petArr.splice(index, 1);
                randerTableData(petArr);
              }
            });
          };
        });
      }
    </script>
  </body>
</html>

```

### 3. Class

Thuộc tính classList với các phương thức add, remove, toogle, contains
(đã học ở các bài trước)

## V. Triển khai smooth scrolling

- Sử dụng element.scrollInToView() - màn hình sẽ tự động scroll đến phần tử element và sẽ không cần phải quan tâm đến các tọa độ nữa.

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
        height: 200vh;
      }

      button {
        position: fixed;
        right: 50px;
        bottom: 50px;
      }
    </style>
  </head>
  <body>
    <h1>Bài 13</h1>
    <ol id="olEl">
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li id="li3">--- Mục 3 ---</li>
      <li>Mục 4</li>
      <li>Mục 5</li>
    </ol>

    <button id="btn-go-top">Go Top</button>

    <script>
      const btnGoTop = document.getElementById("btn-go-top");
      const h1El = document.querySelector("h1");

      btnGoTop.onclick = function () {
        h1El.scrollIntoView();
      };
    </script>
  </body>
</html>

```

## VI. Event Propagation : Bubbling và Capturing

Javascript Event chia thành 2 giai đoạn capturing và bubbling:

- Khi nhấp vào một link, DOM sẽ tạo một click event ngay lập tức

- Tuy nhiên event không được tạo tại phần tử đích mà được tạo tại document (roor của DOM tree)

- Tại đây, giai đoạn capturing xảy ra, nơi event đi từ Document tới phần tử đich, khi event đi xuống nó sẽ đi qua các phần tử cha

- Khi event đến phần tử đích, giai đoạn Target bắt đầu, nơi các event được xử lý

- Sau khi xử lý xong event sẽ di chuyển về lại document - giai đoạn bubbling

Quá trinh này thực sự quan trọng vì về cơ bản event cũng xảy ra ở mỗi phần tử cha. Ở giai đoạn bubbling, event đi qua mọi phần tử cha như thể event đã xảy ra trong chính phần tử đó và xử lý các sự kiện nếu chúng được khai báo.

Không phải tất cả các loại event đều bao gồm 2 giai đoạn capturing và bubbling.

- Các event được capturing khi chúng đi từ gốc xuống phần tử đích, các eventHandler không được gọi vì các eventHandler chỉ xử lý các event ở giai đoạn bubbling.

- Tuy nhiên nếu chúng ta muốn sử dụng eventHandler trong giai đoạn capture, chúng ta chỉ cần xác định một tham số thứ 3 trong phương thức addEventListener(), tham số đặt thành true.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #main {
        width: 500px;
        height: 500px;
        background-color: aqua;
      }

      #left {
        width: 300px;
        height: 300px;
        background-color: bisque;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #P1 {
        background-color: azure;
        width: 250px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div id="left">
        <p id="P1">XIN HÃY CLICK VÀO ĐÂY</p>
      </div>

      <div id="right"></div>
    </div>
    <script>
      const pEl = document.getElementById("P1");
      const leftDiv = document.getElementById("left");
      const mainDiv = document.getElementById("main");

      pEl.addEventListener("click", function (e) {
        console.log(e.target, e.currentTarget == this);
        // console.log(e.currentTarget == this);
        alert("Xin chào P1");
      });

      leftDiv.addEventListener("click", function (e) {
        console.log(e.target, e.currentTarget);
        alert("Xin chào Left Div");
      });

      mainDiv.addEventListener("click", function (e) {
        console.log(e.target, e.currentTarget);
        alert("Xin chào Main Div");
      });
    </script>
  </body>
</html>


```

## VII. Event Delegation

Event Delegation hay có thể hiểu nôm na là ủy quyền sự kiện. Giúp chúng ta có thể thiết lập 1 trình xử lý sự kiện (event handler) trên phần tử cha để xử lý xự kiện trên các phần tử con mà không cần thiết lập nhiều trình xử lý sự kiện trên các phần tử con

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
    <ul id="menu">
      <li><a id="home">home</a></li>
      <li><a id="dashboard">Dashboard</a></li>
      <li><a id="report">report</a></li>
    </ul>

    <script>
      let home = document.querySelector("#home");
      home.addEventListener("click", (event) => {
        console.log("Home menu item was clicked");
      });

      let dashboard = document.querySelector("#dashboard");
      dashboard.addEventListener("click", (event) => {
        console.log("Dashboard menu item was clicked");
      });

      let report = document.querySelector("#report");
      report.addEventListener("click", (event) => {
        console.log("Report menu item was clicked");
      });

      // ------ cách 2

      // let menu = document.querySelector("#menu");

      // menu.addEventListener("click", (event) => {
      //   let target = event.target;

      //   switch (target.id) {
      //     case "home":
      //       console.log("Home menu item was clicked");
      //       break;
      //     case "dashboard":
      //       console.log("Dashboard menu item was clicked");
      //       break;
      //     case "report":
      //       console.log("Report menu item was clicked");
      //       break;
      //   }
      // });
    </script>
  </body>
</html>

```

Ta thấy :
mỗi 1 event handlers là 1 hàm, cũng là 1 đối tượng ==> tốn bộ nhớ. Nên nếu 1 trang có rất nhiều các trình xử lý sự kiện ==> bộ nhớ sẽ tốn kém. Và còn mất thời gian để gán các trình xử lý sự kiện này cho các element ==> chậm trễ

==> Do đó, ở ví dụ trên, ta có thể định nghãi 1 trình xử lý sự kiện duy nhất để xử lý tất cả các sự kiện `click` trên các phần tử khác nhau
==> Cách sử dụng event delegation :

1. Thêm eventHandler vào phần tử cha.

2. Xác định phần tử nào bắt nguồn sự kiện: Sử dụng e.target.

==> Ưu điểm :

- Sử dụng ít bộ nhớ hơn
- Cần ít thời gian để thiết lập (event handlers - trình xử lý sự kiện) trên trang
- Hoạt động nhanh hơn

## VII. DOM Traversing

### 1. Định nghĩa về treversing

- DOM Traversing là chọn một phần tử dựa trên một phần tử khác.

- Vì đôi khi chúng ta cần chọn các phần tử so với một phần tử nhất định khác.

Ví dụ, một phần tử trực tiếp con hoặc một phần tử cha trực tiếp. Hoặc đôi khi chúng ta thậm chí không biết cấu trúc của Dom trong thời gian chạy. Và trong tất cả những trường hợp này, chúng ta cần Dom Traversing.

### 2. Cách chọn các child element

Có các cách hay dùng sau :

1. Sử dụng querySelector hoặc querySelectorAll trên phần tử hiện tại

2. Sử dụng childNodes

3. Sử dụng children, thuộc tính trả về giá trị là một HTMLCollection động

4. Sử dụng firstElementChild để lấy ra phần tử con đầu tiên

5. Sử dụng lastElementChild để lấy ra phần tử con cuối cùng

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
    <ol id="olEl">
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
      <li>Mục 4</li>
      <li>Mục 5</li>
    </ol>

    <script>
      const olEl = document.getElementById("olEl");

      //1. dùng querySelectorAll
      console.log(olEl.querySelectorAll("li"));

      // 2. dùng childNodes
      console.log(olEl.childNodes);

      // 3. dùng children
      console.log(olEl.children);

      // 4. dùng firstElementChild
      console.log(olEl.firstElementChild);

      // 5. dùng lastElementChild
      console.log(olEl.lastElementChild);
    </script>
  </body>
</html>

```

### 3. Chọn các element ngang hàng với previousElementSibling và nextElementSibling

1. previousElementSibling : chọn phần tử anh em phía trước
2. nextElementSibling : chọn phần tử anh em tiếp theo

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
    <ol id="olEl">
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li id="li3">--- Mục 3 ---</li>
      <li>Mục 4</li>
      <li>Mục 5</li>
    </ol>

    <script>
      const olEl = document.getElementById("olEl");
      const liEl3 = document.getElementById("li3");
      liEl3.previousElementSibling.style.color = "red";

      liEl3.nextElementSibling.style.color = "blue";
    </script>
  </body>
</html>

```

## VIII. Tổng kết

Trong bài học này, chúng ta đã học được các kiến thức sau:

- Cấu trúc DOM và DOM API.
- Chọn, thêm, xóa các phần tử trong DOM - kết hợp thiết lập style cho phần tử. (nên thực hành nhiều)
- Cách thức lắng nghe và xử lý sự kiện thông qua event propagation và event delegation.
- DOM Traversing. (nên thực hành nhiều)
